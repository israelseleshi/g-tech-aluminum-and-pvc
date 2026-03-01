import os
import requests
from urllib.parse import urlparse, parse_qs, unquote
import time

def download_kernek_images(txt_file="kernek_image_map.txt", base_folder="Kernek_Products"):
    # SMART FILTER: Specific to Kernek Asansör's UI elements
    junk_keywords = [
        "3w-m", "logo", "whatsapp", "turkey", "pdf", 
        "siparisver", "haber-resim",
        # Skip the news and slider banners so we only get elevator product galleries
        "db/haberler/", "db/slider/" 
    ]

    if not os.path.exists(txt_file):
        print(f"❌ Error: Could not find '{txt_file}'.")
        return

    if not os.path.exists(base_folder):
        os.makedirs(base_folder)

    current_folder = ""
    downloaded_count = 0
    skipped_count = 0

    print("🚀 Starting Smart Download for Kernek Asansör...\n")

    with open(txt_file, "r", encoding="utf-8") as file:
        for line in file:
            line = line.strip()
            if not line:
                continue

            # 1. Handle Safe Folder Creation for ASP URLs
            if line.startswith("PAGE:"):
                page_url = line.replace("PAGE:", "").strip()
                parsed_url = urlparse(page_url)
                
                # Get the base page name (e.g., 'sayfa' from 'sayfa.asp')
                path_base = os.path.basename(parsed_url.path).replace('.asp', '')
                if not path_base:
                    path_base = "home"
                
                # Extract the query parameters (e.g., 'd=130')
                query_parts = parse_qs(parsed_url.query)
                
                # Create a safe folder name (e.g., 'sayfa_130')
                if query_parts:
                    k, v = list(query_parts.items())[0]
                    folder_name = f"{path_base}_{v[0]}"
                else:
                    folder_name = path_base
                
                current_folder = os.path.join(base_folder, folder_name)
                
                if not os.path.exists(current_folder):
                    os.makedirs(current_folder)
                    
                print(f"\n📁 Processing Category: {folder_name}")

            # 2. Handle the "aspjpeg.asp" Dynamic Image Routing
            elif line.startswith("IMG:"):
                img_url = line.replace("IMG:", "").strip()
                img_url_lower = img_url.lower()
                
                # Apply the Smart Filter
                if any(junk in img_url_lower for junk in junk_keywords):
                    skipped_count += 1
                    continue

                parsed_img = urlparse(img_url)
                img_query = parse_qs(parsed_img.query)
                
                # SMART EXTRACTION: If the image is served via aspjpeg, extract the real filename from the 'yol' parameter
                if 'yol' in img_query:
                    # 'yol' looks like C:\Inetpub\...\481.JPEG
                    raw_path = img_query['yol'][0]
                    # Replace Windows backslashes so Python can extract the basename safely on any OS
                    clean_path = raw_path.replace('\\', '/')
                    img_name = os.path.basename(clean_path)
                else:
                    # Standard fallback for normal images like /db/galeri/463.png
                    img_name = os.path.basename(parsed_img.path)

                # Final fallback just in case
                if not img_name or img_name.endswith('.asp'):
                    img_name = f"image_{int(time.time() * 1000)}.jpg"
                    
                save_path = os.path.join(current_folder, img_name)

                if os.path.exists(save_path):
                    skipped_count += 1
                    continue

                print(f"  ⬇️ Downloading: {img_name}")
                
                try:
                    response = requests.get(img_url, stream=True, timeout=15)
                    response.raise_for_status()
                    
                    with open(save_path, 'wb') as f:
                        for chunk in response.iter_content(1024):
                            f.write(chunk)
                            
                    downloaded_count += 1
                    time.sleep(0.5)
                    
                except Exception as e:
                    print(f"  ❌ Error downloading {img_name}: {e}")

    print(f"\n✅ All done! Successfully downloaded {downloaded_count} elevator product images.")
    print(f"⏭️ Skipped {skipped_count} UI/icon/banner images.")
    print(f"📂 Check the '{base_folder}' folder.")

if __name__ == "__main__":
    download_kernek_images()