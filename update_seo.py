import os
from datetime import datetime
from bs4 import BeautifulSoup

# User Constants
BRAND_BLUE = "hsl(240, 80%, 50%)"
VERSION_ID = datetime.now().day # Matches your const VERSION logic
BASE_TITLE = "Hassan Biswas — UI/UX & Front-End Architecture"

def get_page_context(file_path):
    # Determine the folder/page name
    folder = os.path.dirname(file_path).replace("./", "").replace("-", " ").title()
    
    if not folder or folder == ".":
        page_name = "Home"
        desc = "Freelance Front-End Developer & Website Designer specializing in high-performance, SEO-friendly digital experiences."
    else:
        page_name = folder
        desc = f"Explore the {folder} page of Hassan Biswas. Expert UI/UX design and Front-End Architecture solutions."

    return {
        "title": f"{page_name} | {BASE_TITLE}",
        "desc": f"{desc} Updated: v.{VERSION_ID}",
        "keys": f"Hassan Biswas, {page_name}, Web Design, Front-End, JavaScript, HTML, CSS, Figma to Web"
    }

def update_html(file_path):
    context = get_page_context(file_path)
    with open(file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    head = soup.head
    if not head: return

    # Update or Create helper
    def set_tag(name, content, attr="name"):
        tag = head.find('meta', attrs={attr: name})
        if tag:
            tag['content'] = content
        else:
            new_tag = soup.new_tag('meta', attrs={attr: name, "content": content})
            head.append(new_tag)

    # 1. Update Title
    title_tag = head.find('title')
    if title_tag: title_tag.string = context['title']
    else:
        new_title = soup.new_tag('title')
        new_title.string = context['title']
        head.append(new_title)

    # 2. Update Meta Tags
    set_tag("description", context['desc'])
    set_tag("keywords", context['keys'])
    set_tag("theme-color", BRAND_BLUE)
    set_tag("author", "Hassan Biswas")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(soup.prettify())

# Run the crawler
for root, dirs, files in os.walk("."):
    for file in files:
        if file == "index.html":
            update_html(os.path.join(root, file))
  
