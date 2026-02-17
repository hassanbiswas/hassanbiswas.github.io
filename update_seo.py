import os
import random
from datetime import datetime
from bs4 import BeautifulSoup

# --- Brand & Logic Automation ---
BRAND_BLUE = "hsl(240, 80%, 50%)"
BASE_TITLE = "Hassan Biswas — UI/UX & Front-End Architecture"
# Versioning: Dynamic day-based ID to ensure monthly variation
VERSION_ID = datetime.now().day

# --- The Infinite Keyword Pool ---
# High-end, evergreen industry terms that remain relevant for high-performance dev work
POOLS = [
    ["Agentic UX", "Generative UI", "AI-Powered Architecture"],
    ["Core Web Vitals", "Edge-Native Performance", "Next-Gen Web"],
    ["Spatial Web Design", "Immersive Interfaces", "3D Web Logic"],
    ["Predictive SEO", "Zero-Click Optimization", "Semantic Data"],
    ["High-Performance Frontend", "Awwwards-Level Aesthetics", "Clean Logic"],
    ["Accessible Design", "Inclusion-First Architecture", "Fluid UI"]
]

def get_forever_trends():
    now = datetime.now()
    # Logic: Use the month and year to create a stable but rotating index
    # This ensures that every month of every year has a unique "vibe"
    pool_index = (now.year + now.month) % len(POOLS)
    trends = POOLS[pool_index]
    return random.sample(trends, 2)

def get_page_context(file_path):
    file_name = os.path.basename(file_path).replace(".html", "")
    folder = os.path.dirname(file_path).replace("./", "").replace("-", " ").title()
    
    page_subject = "Home" if file_name.lower() == "index" else (folder if folder and folder != "." else file_name.replace("-", " ").title())
    
    trends = get_forever_trends()
    trend_str = ", ".join(trends)
    current_date = datetime.now().strftime("%B %Y")

    return {
        "title": f"{page_subject} | {BASE_TITLE}",
        "desc": f"Expert {page_subject} by Hassan Biswas. Leading-edge {trend_str} specialist. Updated {current_date}. Ver: {VERSION_ID}",
        "keys": f"Hassan Biswas, {page_subject}, {trend_str}, Web Developer, UI/UX, Front-End Architecture",
        "h1": f"Expert {page_subject} Solutions"
    }

def update_html_seo(file_path):
    context = get_page_context(file_path)
    with open(file_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    # Ensure <head> exists
    if not soup.head:
        if soup.html: soup.html.insert(0, soup.new_tag('head'))
        else: return

    head = soup.head

    # Update Title
    if head.title: head.title.string = context['title']
    else:
        new_title = soup.new_tag('title')
        new_title.string = context['title']
        head.append(new_title)

    # Update Meta Tags
    def set_meta(name, content):
        tag = head.find('meta', attrs={"name": name})
        if tag: tag['content'] = content
        else: head.append(soup.new_tag('meta', attrs={"name": name, "content": content}))

    set_meta("description", context['desc'])
    set_meta("keywords", context['keys'])
    set_meta("theme-color", BRAND_BLUE)
    set_meta("author", "Hassan Biswas")

    # Update H1 (Search Engines prioritize the first H1)
    if soup.body:
        h1 = soup.find('h1')
        if h1: h1.string = context['h1']
        else:
            new_h1 = soup.new_tag('h1')
            new_h1.string = context['h1']
            soup.body.insert(0, new_h1)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(soup.prettify())
    print(f"✅ Perpetual Update: {file_path} [{datetime.now().strftime('%Y-%m')}]")

if __name__ == "__main__":
    for root, _, files in os.walk("."):
        for file in files:
            if file.endswith(".html"):
                update_html_seo(os.path.join(root, file))
    
