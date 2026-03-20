import urllib.request
import json
import re
import os
from remove_bg import remove_background

def fetch_shopify_products():
    with open("shopify_products.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    return data.get('products', [])

def get_best_match(local_name, shopify_products):
    local_lower = local_name.lower().strip()
    local_words = set(re.findall(r'\w+', local_lower))
    
    best_product = None
    best_score = 0
    
    for p in shopify_products:
        shop_title = p['title'].lower().strip()
        shop_words = set(re.findall(r'\w+', shop_title))
        
        overlap_words = local_words.intersection(shop_words)
        overlap = len(overlap_words)
        
        # Give higher score if exact match or very close
        if local_lower in shop_title or shop_title in local_lower:
            overlap += 10
            
        if overlap > best_score:
            best_score = overlap
            best_product = p
            
    if best_score >= 2 or len(local_words) == 1:
        return best_product
    return None

def main():
    print("Fetching shopify products...")
    shopify_products = fetch_shopify_products()
    
    ts_path = "src/data/products.ts"
    with open(ts_path, 'r', encoding='utf-8') as f:
        ts_content = f.read()
        
    pattern = r"id:\s*'([^']+)',\s*name:\s*'([^']+)'"
    matches = re.findall(pattern, ts_content)
    
    print(f"Found {len(matches)} local products.")
    
    for product_id, product_name in matches:
        if product_id == 'drpen-m8':
            continue
            
        print(f"\nProcessing {product_id} ({product_name})")
        shop_match = get_best_match(product_name, shopify_products)
        if not shop_match:
            print(f"  -> No match found in Shopify!")
            continue
            
        images = shop_match.get('images', [])
        if not images:
            print(f"  -> Match found ({shop_match['title']}) but no images!")
            continue
            
        img_url = images[0].get('src')
        print(f"  -> Matched with: {shop_match['title']}")
        print(f"  -> Downloading image...")
        
        temp_img = f"public/images/temp-{product_id}.jpg"
        final_img = f"public/images/product-{product_id}.png"
        
        try:
            req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response, open(temp_img, 'wb') as out_file:
                out_file.write(response.read())
                
            print(f"  -> Removing background...")
            # We use tolerance=30 for the provided script
            remove_background(temp_img, final_img, tolerance=30)
            
            if os.path.exists(temp_img):
                os.remove(temp_img)
                
            block_pattern = re.compile(rf"(id:\s*'{product_id}'.*?image:\s*import\.meta\.env\.BASE_URL\s*\+\s*')[^']+(\')", re.DOTALL)
            
            def repl(m):
                return m.group(1) + f"images/product-{product_id}.png" + m.group(2)
                
            ts_content, num_subs = block_pattern.subn(repl, ts_content)
            
            if num_subs > 0:
                print(f"  -> Updated products.ts")
            else:
                print(f"  -> Failed to update products.ts (Regex didn't match)")
                
        except Exception as e:
            print(f"  -> Error: {e}")
            
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
        
    print("\nFinished!")

if __name__ == "__main__":
    main()
