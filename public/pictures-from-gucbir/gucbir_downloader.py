import os
import requests
from urllib.parse import urlparse
import time

def download_gucbir_images(txt_file="gucbir_image_map.txt", base_folder="Gucbir_Products"):
    # SMART FILTER: Highly tailored to the Gucbir Jenerator website output
    junk_keywords = [
        "logo", "flag", "favicon", "dijiton",        # Branding and agency logos
        "destek", "harita", "background",            # General UI and backgrounds
        "1742-kopya",                                # Repeated footer graphic
        "-4x3-1",                                    # Carousel partner logos (e.g. stamford-4x3-1.webp)
        "pdf", "telefon", "video", "hesaplama",      # UI Icons
        "satis-sonrasi", "sirket", "kirala",         # UI Icons
        "insan-kaynaklari", "periyodik", "fuar",     # UI Icons
        "kitapcik", "politika", "haber", "makale",   # UI Icons
        "sertifika", "yakit-tuketim", "pin-icon",    # UI Icons
        
        # Specific repeated mega-menu graphics (we want the products, not the menu icons)
        "kabinsiz-dizel-jenenerator.png", 
        "marin-jenerator.png", 
        "isik-kulesi-jenerator.png", 
        "portatif.png",
        "dc-generator.png"
    ]

    if not os.path.exists(txt_file):
        print(f"❌ Error: Could not find '{txt_file}'. Please ensure the file exists.")
        return

    # Create the main output directory
    if not os.path.exists(base_folder):
        os.makedirs(base_folder)

    current_folder = ""
    downloaded_count = 0
    skipped_count = 0

    print("🚀 Starting Smart Download for Gucbir Jenerator...\n")

    # Open the text file you generated
    with open(txt_file, "r", encoding="utf-8") as file:
        for line in file:
            line = line.strip()
            if not line:
                continue

            # 1. Handle Folder Creation based on PAGE
            if line.startswith("PAGE:"):
                page_url = line.replace("PAGE:", "").strip()
                
                # Extract the last part of the URL to use as a folder name (e.g., 'perkins' or 'light-towers')
                path_parts = [p for p in urlparse(page_url).path.split('/') if p]
                folder_name = path_parts[-1] if path_parts else "homepage_general"
                
                current_folder = os.path.join(base_folder, folder_name)
                
                if not os.path.exists(current_folder):
                    os.makedirs(current_folder)
                    
                print(f"\n📁 Processing Category: {folder_name}")

            # 2. Handle Downloading based on IMG
            elif line.startswith("IMG:"):
                img_url = line.replace("IMG:", "").strip()
                
                # Apply the Smart Filter (convert URL to lowercase for easier matching)
                img_url_lower = img_url.lower()
                if any(junk in img_url_lower for junk in junk_keywords):
                    skipped_count += 1
                    continue # Skip to the next image immediately

                # Get the actual image file name
                img_name = os.path.basename(urlparse(img_url).path)
                
                # Handle edge cases where URL might not end cleanly
                if not img_name:
                    img_name = f"image_{int(time.time())}.jpg"
                    
                save_path = os.path.join(current_folder, img_name)

                # Skip if we already downloaded it (prevents duplicates across different pages)
                if os.path.exists(save_path):
                    skipped_count += 1
                    continue

                print(f"  ⬇️ Downloading: {img_name}")
                
                try:
                    # Download the image
                    response = requests.get(img_url, stream=True, timeout=15)
                    response.raise_for_status() # Check for 404s or 500s
                    
                    with open(save_path, 'wb') as f:
                        for chunk in response.iter_content(1024):
                            f.write(chunk)
                            
                    downloaded_count += 1
                    time.sleep(0.5) # Polite delay to avoid stressing their server
                    
                except Exception as e:
                    print(f"  ❌ Error downloading {img_name}: {e}")

    print(f"\n✅ All done! Successfully downloaded {downloaded_count} product images.")
    print(f"⏭️ Skipped {skipped_count} junk/UI/duplicate images.")
    print(f"📂 Check the '{base_folder}' folder to see your categorized images.")

if __name__ == "__main__":
    download_gucbir_images()