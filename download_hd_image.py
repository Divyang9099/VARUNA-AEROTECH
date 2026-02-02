import requests

url = "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2560&auto=format&fit=crop"
# Alternative high quality industrial image
output_path = "public/hero_industrial_hd.jpg"

try:
    response = requests.get(url, stream=True)
    response.raise_for_status()
    with open(output_path, 'wb') as f:
        for chunk in response.iter_content(chunk_size=8192):
            f.write(chunk)
    print(f"Successfully downloaded HD image to {output_path}")
except Exception as e:
    print(f"Failed to download image: {e}")
