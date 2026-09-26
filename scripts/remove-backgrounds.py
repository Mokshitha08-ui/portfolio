#!/usr/bin/env python3
"""
remove_backgrounds.py
────────────────────────────────────────────────────────────────────────────────
Uses rembg (U2Net AI model) to produce true alpha-transparent PNGs for every
uploaded sticker asset.

Strategy per asset:
  • earphones-real.jpg   — black background   → AI removal → earphones-cut.png
  • camera-real.jpg      — white background   → AI removal → camera-cut.png
  • coffee-real.jpg      — beige background   → AI removal → coffee-cut.png
  • flower-real.jpg      — grey/white bg      → AI removal → flower-cut.png
  • laptop-real.jpg      — white background   → AI removal → laptop-cut.png

All outputs land in public/images/stickers/ as *-cut.png (RGBA, transparent bg).
"""

import sys, os
from pathlib import Path

try:
    from rembg import remove
    from PIL import Image
    import io
except ImportError as e:
    print(f"[ERROR] Missing dependency: {e}")
    print("Run: pip3 install rembg onnxruntime pillow")
    sys.exit(1)

STICKERS_DIR = Path(__file__).parent.parent / "public" / "images" / "stickers"

ASSETS = [
    ("earphones-real.jpg", "earphones-cut.png"),
    ("camera-real.jpg",    "camera-cut.png"),
    ("coffee-real.jpg",    "coffee-cut.png"),
    ("flower-real.jpg",    "flower-cut.png"),
    ("laptop-real.jpg",    "laptop-cut.png"),
]

def process(src_name: str, dst_name: str) -> None:
    src = STICKERS_DIR / src_name
    dst = STICKERS_DIR / dst_name

    if not src.exists():
        print(f"  [SKIP]  {src_name} not found — skipping.")
        return

    print(f"  [PROCESSING]  {src_name} → {dst_name} …", flush=True)

    # Read source
    input_bytes = src.read_bytes()

    # AI background removal — rembg returns RGBA PNG bytes
    output_bytes = remove(input_bytes)

    # Save as PNG with alpha
    img = Image.open(io.BytesIO(output_bytes)).convert("RGBA")
    img.save(dst, format="PNG", optimize=True)

    # Report transparency statistics
    r, g, b, a = img.split()
    total_pixels = img.width * img.height
    transparent_pixels = sum(1 for px in a.getdata() if px < 10)
    pct = transparent_pixels / total_pixels * 100
    print(f"           ✓  Saved {dst_name}  ({img.width}×{img.height})  —  {pct:.1f}% transparent")

def main():
    print("\n─── Background Removal (rembg AI) ─────────────────────────────────────")
    print(f"    Output directory: {STICKERS_DIR}\n")

    for src, dst in ASSETS:
        process(src, dst)

    print("\n─── Done ───────────────────────────────────────────────────────────────")
    print("    All transparent PNGs saved. Update Collage.tsx to use *-cut.png files.\n")

if __name__ == "__main__":
    main()
