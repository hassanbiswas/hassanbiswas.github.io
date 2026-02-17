import os
from datetime import datetime
from bs4 import BeautifulSoup

# Logic Automation: Matches your preferred 'const VERSION = new Date().getDate();'
# This ensures content updates monthly as the ID shifts.
VERSION_ID = datetime.now().day 
BRAND_BLUE = "hsl(240, 80%, 50%)"
BASE_TITLE = "Hassan Biswas — UI/UX & Front-End Architecture"

def get_page_context(file_path):
    # Extracts the folder or filename to create a unique context
    file_name = os.path.basename(file_path).replace(".html", "")
    folder = os.path.dirname(file_path).replace("./", "").replace("-", " ").title()
    
    # Logic for unique naming based on file location
    page_subject = folder if (folder and folder != ".") else file_name.replace("-", " ").title()
    if page_subject == "Index": page_subject = "Home"

    # Unique Content Generation
    title = f"{page_subject} | {BASE_TITLE}"
    desc = f"Professional {page_subject} services by Hassan Biswas. Transforming Figma designs into high-performance, SEO-friendly digital experiences. Version: {VERSION_ID}"
    keys = f"Hassan Biswas, {page_subject}, Web Developer, UI/UX, Front-End Architecture, HTML, CSS, JavaScript"
    h1_text = f"Expert {page_subject} Solutions"

    return {
        "title": title,
        "desc": desc,
        "keys": keys,
        "h1": h1_text
    }

def update_html_seo(file_path):
    context = get_page_context(file_path)
    with open(file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # --- 1. Meta Tags Management ---
    if not soup.head:
        new_head = soup.new_tag('head')
        soup.html.insert(0, new_head)
    
    head = soup.head

    # Update or Create Title
    if head.title:
        head.title.string = context['title']
    else:
        new_title = soup.new_tag('title')
        new_title.string = context['title']
        head.append(new_title)

    # Helper to set/update meta tags
    def set_meta(name, content):
        tag = head.find('meta', attrs={"name": name})
        if tag:
            tag['content'] = content
        else:
            new_meta = soup.new_tag('meta', attrs={"name": name, "content": content})
            head.append(new_meta)

    set_meta("description", context['desc'])
    set_meta("keywords", context['keys'])
    set_meta("theme-color", BRAND_BLUE)
    set_meta("author", "Hassan Biswas")

    # --- 2. H1 Tag Management ---
    # Finds the first H1 or creates one if missing inside <body>
    if soup.body:
        h1 = soup.find('h1')
        if h1:
            h1.string = context['h1']
        else:
            new_h1 = soup.new_tag('h1')
            new_h1.string = context['h1']
            soup.body.insert(0, new_h1)

    # Save changes
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(soup.prettify())
    print(f"✅ Updated SEO for: {file_path}")

# --- 3. Automation Crawler ---
# Walks through all directories to find every .html file
if __name__ == "__main__":
    for root, dirs, files in os.walk("."):
        for file in files:
            if file.endswith(".html"):
                target_path = os.path.join(root, file)
                update_html_seo(target_path)
        
