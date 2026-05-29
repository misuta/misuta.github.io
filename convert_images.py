#!/usr/bin/env python3
"""
Mizuta's Blog — Conversión JPG → WebP y actualización de frontmatters
Ejecutar desde la raíz del repo: python3 convert_images.py
"""

import os
import re
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("❌ Instala Pillow primero: pip install Pillow")
    exit(1)

REPO_ROOT = Path(__file__).parent
IMAGES_DIR = REPO_ROOT / "assets" / "images"
POSTS_DIR = REPO_ROOT / "_posts"

# JPGs a convertir → nuevo nombre WebP
CONVERSIONS = {
    "que-es-la-blockchain.jpg":         "que-es-la-blockchain.webp",
    "bitcoin-halving.jpg":              "bitcoin-halving.webp",
    "bitcoin-que-es-y-como-funciona.jpg": "bitcoin-que-es-y-como-funciona.webp",
    "como-comprar-bitcoin-en-kraken.jpg": "como-comprar-bitcoin-en-kraken.webp",
    "mejores-wallets-de-bitcoin.jpg":   "mejores-wallets-de-bitcoin.webp",
    "que-es-solana.jpg":                "que-es-solana.webp",
}

# ── 1. Convertir imágenes ─────────────────────────────────────────────────────
print("\n── Conversión de imágenes ──────────────────────────────────────")
converted = {}
for jpg_name, webp_name in CONVERSIONS.items():
    jpg_path = IMAGES_DIR / jpg_name
    webp_path = IMAGES_DIR / webp_name

    if not jpg_path.exists():
        print(f"⚠️  No encontrado: {jpg_path} — saltando")
        continue

    img = Image.open(jpg_path).convert("RGB")
    img.save(webp_path, format="WEBP", quality=85, method=6)

    jpg_kb = jpg_path.stat().st_size // 1024
    webp_kb = webp_path.stat().st_size // 1024
    print(f"✓ {jpg_name} → {webp_name}  ({jpg_kb}KB → {webp_kb}KB)")
    converted[jpg_name] = webp_name

# ── 2. Actualizar frontmatters en _posts ─────────────────────────────────────
print("\n── Actualización de frontmatters ───────────────────────────────")
posts_updated = 0

for post_file in sorted(POSTS_DIR.glob("*.md")):
    content = post_file.read_text(encoding="utf-8")
    original = content

    for jpg_name, webp_name in converted.items():
        # Busca /assets/images/nombre.jpg en el frontmatter (campo image:)
        jpg_ref = f"/assets/images/{jpg_name}"
        webp_ref = f"/assets/images/{webp_name}"
        if jpg_ref in content:
            content = content.replace(jpg_ref, webp_ref)
            print(f"✓ {post_file.name}: {jpg_name} → {webp_name}")

    if content != original:
        post_file.write_text(content, encoding="utf-8")
        posts_updated += 1

# ── 3. Resumen ────────────────────────────────────────────────────────────────
print(f"\n── Resumen ─────────────────────────────────────────────────────")
print(f"   Imágenes convertidas : {len(converted)}")
print(f"   Posts actualizados   : {posts_updated}")
print(f"\n✅ Listo. Puedes borrar los .jpg originales cuando compruebes que todo funciona.")
print("   git add assets/images/ _posts/ && git commit -m 'chore: convert thumbnails JPG to WebP'")
