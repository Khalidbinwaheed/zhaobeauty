import urllib.request
import json
import sys

def fetch_products():
    url = "https://visionskinglowstore.shop/products.json?limit=250"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    response = urllib.request.urlopen(req)
    data = json.loads(response.read())
    return data.get('products', [])

if __name__ == "__main__":
    products = fetch_products()
    print(f"Fetched {len(products)} products from Shopify.")
    for p in products[:10]:
        title = p.get('title')
        images = p.get('images', [])
        img_url = images[0].get('src') if images else 'No image'
        print(f"Title: {title} | Image: {img_url}")
