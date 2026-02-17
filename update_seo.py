import os
import random
from datetime import datetime
from bs4 import BeautifulSoup

# --- Zero Maintenance Configurations ---
BRAND_BLUE = "hsl(240, 80%, 50%)"
BASE_TITLE = "Hassan Biswas — UI/UX & Front-End Architecture"
# Automates the ID based on the current date
VERSION_ID = datetime.now().day 

# Perpetual Keyword Pools (The "Forever" Engine)
# These are mixed mathematically so you never have to edit this list.
CORE_TECH = ["Agentic UX", "Generative UI", "Core Web Vitals", "Edge-Native Apps", "Spatial Web Design"]
DESIGN_STYLES = ["Neubrutalism", "Minimalist Logic", "Tactile UI", "Awwwards Aesthetics"]
SEO_FOCUS = ["Zero-Click Optimization", "Semantic HTML", "Performance-First", "SEO Architecture"]

def get_forever_trends():
    now = datetime.now()
    # Use math to ensure a different combo every month/year
    seed = now.year + now.month
    random.seed(seed) 
    
    trend_list = [
        random.choice(CORE_TECH),
        random.choice(DESIGN_STYLES),
        random.choice(SEO_FOCUS)
    ]
    return ", ".join(trend_list)

def get_page_context(file_path):
    file_name = os.path.basename(file_path).replace(".html", "")
    folder = os.path.dirname(file_path).replace("./", "").replace("-", " ").title()
    
    # Handle "Index" vs Subpages
    page_subject = "Home" if file_name.lower() == "index" else (folder if folder and folder != "." else file_name.replace("-", " ").title())
    
    trends = get_forever_trends()
    current_month_year = datetime.now().strftime("%B %Y")

    return {
        "title": f"{page_subject} | {BASE_TITLE}",
        "desc": f"Expert {page_subject} by Hassan Biswas. Featuring {trends}. Optimized for {current_month_year}. Ver: {VERSION_ID}",
        "keys": f"Hassan Biswas, {page_subject}, {trends}, Web Developer, UI/UX, Front-End",
        "h1": f"Expert {page_subject} Solutions"
    }

def update_html_seo(file_path):
    context = get_page_context(file_path)
    with open(file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    if not soup.head:
        if soup.html: soup.html.insert(0, soup.new_tag('head'))
        else: return

    head = soup.head

    # Update Title & Meta
    if head.title: head.title.string = context['title']
    else:
        new_title = soup.new_tag('title')
        new_title.string = context['title']
        head.append(new_title)

    def set_meta(name, content):
        tag = head.find('meta', attrs={"name": name})
        if tag: tag['content'] = content
        else: head.append(soup.new_tag('meta', attrs={"name": name, "content": content}))

    set_meta("description", context['desc'])
    set_meta("keywords", context['keys'])
    set_meta("theme-color", BRAND_BLUE)
    set_meta("author", "Hassan Biswas")

    # Update H1
    if soup.body:
        h1 = soup.find('h1')
        if h1: h1.string = context['h1']
        else: soup.body.insert(0, soup.new_tag('h1', string=context['h1']))

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(soup.prettify())

if __name__ == "__main__":
    for root, _, files in os.walk("."):
        for file in files:
            if file.endswith(".html"):
                path = os.path.join(root, file)
                update_html_seo(path)
                print(f"✅ SEO Synced: {path}")
        
