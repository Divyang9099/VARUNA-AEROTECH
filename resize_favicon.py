from PIL import Image

def resize_favicon():
    path = "public/favicon.png"
    img = Image.open(path).convert("RGBA")
    
    # User requested 96x96
    new_size = (96, 96)
    
    # Resize with high quality
    img = img.resize(new_size, Image.Resampling.LANCZOS)
    
    img.save(path, "PNG")
    print(f"Resized favicon to {new_size}")

if __name__ == "__main__":
    resize_favicon()
