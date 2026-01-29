from PIL import Image

def create_square_thumbnail():
    # Source image (the banner)
    source_path = r"C:/Users/Divine/.gemini/antigravity/brain/8f2d3e86-7540-4bee-a90d-6c3a2d0a3da3/varuna_with_logo_1769609167272.png"
    output_path = "public/thumbnail.jpg"
    
    img = Image.open(source_path).convert("RGB")
    
    # We want a square image, say 600x600 for high quality thumbnail
    target_size = 600
    
    # Create background (white or pick a color from the image?)
    # The image is blueish. Let's pick the top-left pixel color.
    bg_color = img.getpixel((0, 0))
    # Or just use white if that looks cleaner? Let's use the detected color to blend.
    
    new_img = Image.new("RGB", (target_size, target_size), bg_color)
    
    # Resize source to fit within target_size (maintain aspect ratio)
    img.thumbnail((target_size, target_size), Image.Resampling.LANCZOS)
    
    # Center it
    x = (target_size - img.width) // 2
    y = (target_size - img.height) // 2
    
    new_img.paste(img, (x, y))
    
    # Save as JPEG
    new_img.save(output_path, "JPEG", quality=85)
    print(f"Created square thumbnail at {output_path}")

if __name__ == "__main__":
    create_square_thumbnail()
