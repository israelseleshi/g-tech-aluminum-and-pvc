import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time

class LorenzoMapper:
    def __init__(self):
        self.base_url = "https://lorenzoline.com.tr/en/systems/"
        self.domain = "lorenzoline.com.tr"
        # Using a standard browser User-Agent to prevent getting blocked
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
        }
        self.session = requests.Session()
        self.session.headers.update(self.headers)

    def get_system_pages(self):
        print(f"Scanning main page: {self.base_url}")
        try:
            response = self.session.get(self.base_url, timeout=10)
            response.raise_for_status()
        except requests.exceptions.RequestException as e:
            print(f"Error fetching main page: {e}")
            return []

        soup = BeautifulSoup(response.text, 'html.parser')
        
        system_links = set()
        # Find all links on the main systems page
        for a_tag in soup.find_all('a', href=True):
            href = a_tag['href']
            full_url = urljoin(self.base_url, href)
            
            # Smart filtering: Only keep links that belong to the site, 
            # aren't the exact same base page, and avoid obvious non-product pages
            if self.domain in full_url and full_url != self.base_url:
                if not any(exclude in full_url for exclude in ['about-us', 'contact', 'references', 'communication', 'mailto:', 'tel:']):
                    # Remove trailing slashes and anchors for clean distinct URLs
                    clean_url = full_url.split('#')[0].rstrip('/') + '/'
                    system_links.add(clean_url)
                    
        return list(system_links)

    def get_images_from_page(self, page_url):
        print(f"  -> Scanning images on: {page_url}")
        try:
            response = self.session.get(page_url, timeout=10)
            response.raise_for_status()
        except requests.exceptions.RequestException as e:
            print(f"  -> Failed to load page: {e}")
            return []

        soup = BeautifulSoup(response.text, 'html.parser')
        images = set()

        for img in soup.find_all('img'):
            # Smart fallback for modern sites with lazy-loaded images
            src = img.get('data-src') or img.get('data-lazy-src') or img.get('src')
            if src:
                # Ignore tiny UI elements if possible (like base64 placeholders)
                if src.startswith('data:image'):
                    continue
                
                full_img_url = urljoin(page_url, src)
                images.add(full_img_url)

        # Be polite to the server
        time.sleep(1) 
        return list(images)

    def generate_report(self, output_filename="systems_image_map.txt"):
        pages = self.get_system_pages()
        print(f"Found {len(pages)} potential sub-pages. Scraping images now...")

        with open(output_filename, 'w', encoding='utf-8') as f:
            for page in pages:
                images = self.get_images_from_page(page)
                if images:
                    f.write(f"PAGE: {page}\n")
                    for img in images:
                        f.write(f"  IMG: {img}\n")
                    f.write("\n")
        
        print(f"\n✅ Mapping complete! Information saved to {output_filename}")
        print("You can now open the text file, delete any 'IMG: ...' lines you don't want, and run the Downloader script.")

if __name__ == "__main__":
    mapper = LorenzoMapper()
    mapper.generate_report()