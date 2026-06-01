#!/usr/bin/env python3
"""
IndexNow submitter para Mizuta's Blog
Envía todas las URLs del sitemap a Bing via IndexNow
Uso: python3 indexnow.py
"""

import requests
import xml.etree.ElementTree as ET

HOST = "mizuta.eu"
KEY = "17f231e2b1be408ca0a7563ee632a02f"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
SITEMAP_URL = f"https://{HOST}/sitemap.xml"

def get_urls_from_sitemap():
    print(f"Obteniendo URLs de {SITEMAP_URL}...")
    response = requests.get(SITEMAP_URL, timeout=10)
    response.raise_for_status()
    root = ET.fromstring(response.content)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = [loc.text for loc in root.findall(".//sm:loc", ns)]
    print(f"  {len(urls)} URLs encontradas")
    return urls

def submit_urls(urls):
    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls
    }
    print(f"Enviando {len(urls)} URLs a IndexNow...")
    response = requests.post(
        "https://api.indexnow.org/IndexNow",
        json=payload,
        headers={"Content-Type": "application/json; charset=utf-8"},
        timeout=10
    )
    if response.status_code == 200:
        print("✅ URLs enviadas correctamente")
    else:
        print(f"❌ Error {response.status_code}: {response.text}")

if __name__ == "__main__":
    urls = get_urls_from_sitemap()
    if urls:
        submit_urls(urls)
