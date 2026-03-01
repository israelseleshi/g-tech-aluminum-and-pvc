import os
import requests
from urllib.parse import urlparse
import time

def download_filtered_images(txt_file="systems_image_map.txt", base_folder="Lorenzo_Products"):
    # SMART FILTER: Keywords found in your output that belong to UI/Junk images
    junk_keywords = [
        "flag",            # Catches en_US.png and tr_TR.png
        "logo",            # Catches lorenzoline-logo-5.png, logo-ontop.png, etc.
        "telefon-arama",   # Catches the phone icon
        "pdf-ikon",        # Catches the PDF icon
        "dummy.png",       # Catches the revslider dummy image
        "no-image",        # Catches the placeholder image
        "avatar",          # Catches test-avatar1.jpg
        "adress"           # Catches the 7-atek-adress map image
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

    print("🚀 Starting Smart Download...\n")

    # Open the text file you generated
    with open(txt_file, "r", encoding="utf-8") as file:
        for line in file:
            line = line.strip()
            if not line:
                continue

            # 1. Handle Folder Creation based on PAGE
            if line.startswith("PAGE:"):
                page_url = line.replace("PAGE:", "").strip()
                
                # Extract the last part of the URL to use as a folder name (e.g., 'windows')
                path_parts = [p for p in urlparse(page_url).path.split('/') if p]
                folder_name = path_parts[-1] if path_parts else "general"
                
                current_folder = os.path.join(base_folder, folder_name)
                
                if not os.path.exists(current_folder):
                    os.makedirs(current_folder)
                    
                print(f"\n📁 Processing Category: {folder_name}")

            # 2. Handle Downloading based on IMG
            elif line.startswith("IMG:"):
                img_url = line.replace("IMG:", "").strip()
                
                # Apply the Smart Filter
                if any(junk in img_url.lower() for junk in junk_keywords):
                    skipped_count += 1
                    continue # Skip to the next image immediately

                # Get the actual image file name (e.g., 'lorenzoline-70t-70th-yeni.jpg')
                img_name = os.path.basename(urlparse(img_url).path)
                save_path = os.path.join(current_folder, img_name)

                # Skip if we already downloaded it (prevents duplicates across different pages)
                if os.path.exists(save_path):
                    skipped_count += 1
                    continue

                print(f"  ⬇️ Downloading: {img_name}")
                
                try:
                    # Download the image
                    response = requests.get(img_url, stream=True, timeout=10)
                    response.raise_for_status() # Check for 404s or 500s
                    
                    with open(save_path, 'wb') as f:
                        for chunk in response.iter_content(1024):
                            f.write(chunk)
                            
                    downloaded_count += 1
                    time.sleep(0.5) # Polite delay to avoid stressing their server
                    
                except Exception as e:
                    print(f"  ❌ Error downloading {img_name}: {e}")

    print(f"\n✅ All done! Successfully downloaded {downloaded_count} product images.")
    print(f"⏭️ Skipped {skipped_count} junk/duplicate images.")
    print(f"📂 Check the '{base_folder}' folder to see your categorized images.")

if __name__ == "__main__":
    download_filtered_images()