from PIL import Image, ImageEnhance, ImageFilter
import sys
import os

def process_image(input_path, output_path):
    try:
        img = Image.open(input_path)
        
        # 1. Enhance Color/Contrast (High-end look)
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(1.2)  # Increase contrast
        
        enhancer = ImageEnhance.Color(img)
        img = enhancer.enhance(1.1)  # Slight vibrancy bump
        
        enhancer = ImageEnhance.Sharpness(img)
        img = enhancer.enhance(1.5)  # Sharpen details
        
        # 2. Naive "Logo Removal" - Crop bottom 60px where watermarks often reside
        # (This is a guess, but often effective for "premium app logos")
        # width, height = img.size
        # img = img.crop((0, 0, width, height - 60))
        
        # Saving high quality
        img.save(output_path, quality=95)
        print(f"Successfully processed image to {output_path}")
        
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python process_image.py <input> <output>")
    else:
        process_image(sys.argv[1], sys.argv[2])
