import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time

class GucbirMapper:
    def __init__(self):
        # Base URL based on your screenshot
        self.base_url = "https://www.gucbirjenerator.com/en/"
        self.domain = "gucbirjenerator.com"
        
        # Standard browser headers to prevent getting blocked by basic bot-protection
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
        }
        self.session = requests.Session()
        self.session.headers.update(self.headers)

    def get_product_pages(self):
        print(f"Scanning main page: {self.base_url}")
        try:
            response = self.session.get(self.base_url, timeout=10)
            response.raise_for_status()
        except requests.exceptions.RequestException as e:
            print(f"Error fetching main page: {e}")
            return []

        soup = BeautifulSoup(response.text, 'html.parser')
        system_links = set()
        
        # SMART FILTER: Words to exclude from URLs so we don't scan non-product pages
        # (Avoids "COMPANY", "DOCUMENT", "SERVICES", "CONTACT" menus)
        exclusions = [
            'contact', 'about', 'corporate', 'services', 'document', 
            'news', 'blog', 'reference', 'human-resources', 'pdf',
            'mailto:', 'tel:', 'whatsapp:', 'javascript:'
        ]

        # Find all links on the page
        for a_tag in soup.find_all('a', href=True):
            href = a_tag['href']
            full_url = urljoin(self.base_url, href)
            
            # Ensure it's an internal link belonging to the domain
            if self.domain in full_url:
                # Clean the URL (remove # anchors and trailing slashes to avoid duplicates)
                clean_url = full_url.split('#')[0].rstrip('/')
                
                # Check if it's not the exact homepage and doesn't contain excluded words
                if clean_url != self.base_url.rstrip('/'):
                    is_valid = True
                    for exclude in exclusions:
                        if exclude in clean_url.lower():
                            is_valid = False
                            break
                    
                    if is_valid:
                        # Re-add the trailing slash for a clean URL format
                        system_links.add(clean_url + '/')
                        
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
            # Handle standard and modern lazy-loaded images
            src = img.get('data-src') or img.get('data-lazy-src') or img.get('src')
            if src:
                # Ignore base64 encoded strings (usually tiny UI placeholders)
                if src.startswith('data:image'):
                    continue
                
                full_img_url = urljoin(page_url, src)
                images.add(full_img_url)

        # Be polite to the server by waiting 1 second between page scans
        time.sleep(1) 
        return list(images)

    def generate_report(self, output_filename="gucbir_image_map.txt"):
        pages = self.get_product_pages()
        print(f"Found {len(pages)} potential product/category pages. Scraping images now...\n")

        with open(output_filename, 'w', encoding='utf-8') as f:
            for page in pages:
                images = self.get_images_from_page(page)
                if images:
                    f.write(f"PAGE: {page}\n")
                    for img in images:
                        f.write(f"  IMG: {img}\n")
                    f.write("\n")
        
        print(f"\n✅ Mapping complete! Information saved to '{output_filename}'")
        print("Please copy and paste the contents of the text file here so I can write your Phase 2 Downloader script.")

if __name__ == "__main__":
    mapper = GucbirMapper()
    mapper.generate_report()