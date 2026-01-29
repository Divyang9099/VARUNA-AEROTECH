import datetime

base_url = "https://varunaat.in"
today = datetime.date.today().isoformat()

# Static pages
pages = [
    "",
    "/about",
    "/industries",
    "/contact"
]

# Services IDs from siteConfig.js (manual extraction to be safe)
service_ids = [
    "solar-panel-inspection",
    "windmill-inspection",
    "powerline-inspection",
    "pipeline-inspection",
    "infrastructure-monitoring",
    "surveillance",
    "industrial-utility-inspection",
    "inventory-management",
    "topographic-survey"
]

# Industry IDs from siteConfig.js
industry_ids = [
    "solar-energy",
    "wind-energy",
    "power-utilities",
    "infrastructure",
    "industrial-plants",
    "land-highway"
]

xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

# Add static pages
for page in pages:
    priority = "1.0" if page == "" else "0.8"
    xml_content += f'  <url>\n    <loc>{base_url}{page}</loc>\n    <lastmod>{today}</lastmod>\n    <priority>{priority}</priority>\n  </url>\n'

# Add service pages
for s_id in service_ids:
    xml_content += f'  <url>\n    <loc>{base_url}/services/{s_id}</loc>\n    <lastmod>{today}</lastmod>\n    <priority>0.8</priority>\n  </url>\n'

# Add industry pages
for i_id in industry_ids:
    xml_content += f'  <url>\n    <loc>{base_url}/industries/{i_id}</loc>\n    <lastmod>{today}</lastmod>\n    <priority>0.8</priority>\n  </url>\n'

xml_content += '</urlset>'

with open("public/sitemap.xml", "w", encoding="utf-8") as f:
    f.write(xml_content)

print("sitemap.xml created successfully")
