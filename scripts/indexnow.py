#!/usr/bin/env python3
"""
IndexNow script para Mizuta's Blog
Envía URLs nuevas a Bing/IndexNow para acelerar la indexación.

Uso:
  python3 scripts/indexnow.py                        # envía todos los posts del sitemap
  python3 scripts/indexnow.py <url1> <url2> ...      # envía URLs específicas
"""

import sys
import os
import json
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET

HOST = "mizuta.eu"
KEY = os.environ.get("INDEXNOW_KEY", "17f231e2b1be408ca0a7563ee632a02f")
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
SITEMAP_URL = f"https://{HOST}/sitemap.xml"
INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"


def get_urls_from_sitemap():
    """Obtiene todas las URLs del sitemap."""
    with urllib.request.urlopen(SITEMAP_URL) as response:
        tree = ET.parse(response)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = [loc.text for loc in tree.findall(".//sm:loc", ns)]
    return urls


def submit_urls(urls):
    """Envía las URLs a IndexNow."""
    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        INDEXNOW_ENDPOINT,
        data=data,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req) as response:
            status = response.status
    except urllib.error.HTTPError as e:
        status = e.code

    if status in (200, 202):
        print(f"✓ {len(urls)} URL(s) enviadas correctamente (HTTP {status})")
    else:
        print(f"✗ Error al enviar URLs (HTTP {status})")

    for url in urls:
        print(f"  - {url}")


if __name__ == "__main__":
    if len(sys.argv) > 1:
        urls = sys.argv[1:]
        print(f"Enviando {len(urls)} URL(s) específica(s)...")
    else:
        print("Obteniendo URLs del sitemap...")
        urls = get_urls_from_sitemap()
        print(f"Encontradas {len(urls)} URLs en el sitemap.")

    submit_urls(urls)
