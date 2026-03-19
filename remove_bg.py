from PIL import Image

def remove_background(img_path, out_path, tolerance=30):
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()
    
    # get corner color
    width, height = img.size
    corner_color = img.getpixel((0, 0))
    
    new_data = []
    for item in data:
        # If item is close to corner color
        if abs(item[0] - corner_color[0]) < tolerance and \
           abs(item[1] - corner_color[1]) < tolerance and \
           abs(item[2] - corner_color[2]) < tolerance:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(out_path, "PNG")

if __name__ == "__main__":
    remove_background("public/images/logo.png", "public/images/logo.png", tolerance=20)
    print("Background removed successfully")
