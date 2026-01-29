from PIL import Image

def process_image():
    # The source: The "previous photo" (banner with logo)
    source_path = r"C:/Users/Divine/.gemini/antigravity/brain/8f2d3e86-7540-4bee-a90d-6c3a2d0a3da3/varuna_with_logo_1769609167272.png"
    output_path = "public/preview.png"
    
    img = Image.open(source_path)
    print(f"Original size: {img.size}")
    
    # Target dimensions
    target_w, target_h = 1200, 630
    
    # Current is 1024x1024.
    # We want to turn this into 1200x630.
    # If we just resize, it squashes.
    # If we crop, we might lose top/bottom context.
    # Let's crop to the correct aspect ratio first, then resize.
    
    target_ratio = target_w / target_h
    current_ratio = img.width / img.height
    
    if current_ratio < target_ratio:
        # Image is too tall (square is taller than landscape rectangle)
        # We need to crop height.
        # Keep full width.
        new_width = img.width
        new_height = int(new_width / target_ratio)
        
        # Center crop height
        top = (img.height - new_height) // 2
        bottom = top + new_height
        left = 0
        right = img.width
        
        print(f"Cropping to: {right-left}x{bottom-top}")
        img = img.crop((left, top, right, bottom))
    else:
        # Image is too wide (unlikely for square to landscape)
        # Crop width
        new_height = img.height
        new_width = int(new_height * target_ratio)
        
        left = (img.width - new_width) // 2
        right = left + new_width
        top = 0
        bottom = img.height
        img = img.crop((left, top, right, bottom))
        
    # Now resize to exact 1200x630
    img = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Save
    img.save(output_path, "PNG", optimize=True)
    print(f"Saved processed image to {output_path} with size {img.size}")

if __name__ == "__main__":
    process_image()
