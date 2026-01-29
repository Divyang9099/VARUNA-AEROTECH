from PIL import Image
import os

def optimize_preview():
    img_path = "public/preview.png"
    jpg_path = "public/preview.jpg"
    
    if not os.path.exists(img_path):
        print(f"Error: {img_path} does not exist")
        return

    img = Image.open(img_path).convert("RGB")
    
    # Save as JPEG with 75% quality
    img.save(jpg_path, "JPEG", quality=75)
    
    print(f"PNG size: {os.path.getsize(img_path)}")
    print(f"JPG size: {os.path.getsize(jpg_path)}")

if __name__ == "__main__":
    optimize_preview()
