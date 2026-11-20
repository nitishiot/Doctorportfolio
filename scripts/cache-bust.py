#!/usr/bin/env python3
"""Stamp CSS/JS references in index.html with a content hash (?v=xxxxxxxx).

Browsers cache styles.css and the scripts. Without a changing URL, a visitor
can get the new index.html with yesterday's CSS/JS and see a broken page.
Run this after editing any file in assets/css or assets/js:

    python3 scripts/cache-bust.py
"""
import hashlib
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
INDEX = ROOT / "index.html"
ASSETS = ["assets/css/styles.css", "assets/js/reviews.js", "assets/js/main.js"]

html = INDEX.read_text(encoding="utf-8")
for asset in ASSETS:
    digest = hashlib.sha256((ROOT / asset).read_bytes()).hexdigest()[:8]
    pattern = re.compile(r'(["\'])' + re.escape(asset) + r'(?:\?v=[0-9a-f]+)?\1')
    html, n = pattern.subn(lambda m: f"{m.group(1)}{asset}?v={digest}{m.group(1)}", html)
    if n != 1:
        raise SystemExit(f"expected exactly one reference to {asset}, found {n}")
    print(f"{asset}?v={digest}")
INDEX.write_text(html, encoding="utf-8")
