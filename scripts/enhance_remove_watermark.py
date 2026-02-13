import cv2
import numpy as np
import sys
import os

def enhance_and_cleanup(input_path, output_path):
    if not os.path.exists(input_path):
        print(f"Error: Input file '{input_path}' not found.")
        return

    print(f"Processing {input_path}...")
    
    # Read image
    img = cv2.imread(input_path)
    if img is None:
        print("Error: Could not read image.")
        return

    # --- 1. Advanced Watermark Removal (Edge-based Inpainting) ---
    # Instead of just brightness, we use edge detection to find Logos/Text (which have high contrast/edges)
    # This works for colored icons (favicons) too.
    
    h, w = img.shape[:2]
    mask = np.zeros((h, w), dtype=np.uint8)
    
    def create_corner_mask(image, h_start, h_end, w_start, w_end):
        roi = image[h_start:h_end, w_start:w_end]
        
        # edge detection to find text/icons
        gray_roi = cv2.cvtColor(roi, cv2.COLOR_BGR2GRAY)
        
        # Canny edge detection
        edges = cv2.Canny(gray_roi, 50, 150)
        
        # Dilate edges to connect text/icon parts into a solid blob
        kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
        dilated = cv2.dilate(edges, kernel, iterations=3)
        
        # Also include very bright or very dark pixels (often text)
        _, bright = cv2.threshold(gray_roi, 230, 255, cv2.THRESH_BINARY)
        _, dark = cv2.threshold(gray_roi, 0, 30, cv2.THRESH_BINARY)
        
        combined_mask = cv2.bitwise_or(dilated, bright)
        combined_mask = cv2.bitwise_or(combined_mask, dark)
        
        # Final dilation to ensure we cover the transition area for inpainting
        final_mask = cv2.dilate(combined_mask, kernel, iterations=2)
        
        return final_mask

    # Define Areas
    # Top-Left (Favicons/Titles) - Expanded to cover more area
    tl_h_end = int(h * 0.20)  # Increased from 0.15 to 0.20
    tl_w_end = int(w * 0.35)  # Increased from 0.25 to 0.35
    mask[0:tl_h_end, 0:tl_w_end] = create_corner_mask(img, 0, tl_h_end, 0, tl_w_end)

    # Bottom-Right (Logos/Credits)
    br_h_start = int(h * 0.85)
    br_w_start = int(w * 0.75)
    mask[br_h_start:h, br_w_start:w] = create_corner_mask(img, br_h_start, h, br_w_start, w)

    # Inpaint with larger radius for better blending
    # Increased radius from 3 to 5 for smoother results
    clean_img = cv2.inpaint(img, mask, 5, cv2.INPAINT_NS)

    # --- 2. Structure-Preserving Quality Enhancement ---
    
    # Very mild denoising to keep texture
    denoised = cv2.fastNlMeansDenoisingColored(clean_img, None, 2, 2, 7, 21)
    
    # Mild Sharpening using Unsharp Mask (Gaussian subtraction)
    # This enhances local contrast without creating "fake" edges
    gaussian_blur = cv2.GaussianBlur(denoised, (0, 0), 1.5)
    normalized = cv2.addWeighted(denoised, 1.2, gaussian_blur, -0.2, 0)
    
    # Minimal Contrast Boost
    # Convert to LAB processing only L channel locally
    lab = cv2.cvtColor(normalized, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    
    # Very gentle CLAHE
    clahe = cv2.createCLAHE(clipLimit=1.1, tileGridSize=(8,8))
    cl = clahe.apply(l)
    
    limg = cv2.merge((cl, a, b))
    final = cv2.cvtColor(limg, cv2.COLOR_LAB2BGR)

    # Save
    cv2.imwrite(output_path, final)
    print(f"Success! Processed image saved to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python enhance_remove_watermark.py <input_image_path> <output_image_path>")
    else:
        enhance_and_cleanup(sys.argv[1], sys.argv[2])
