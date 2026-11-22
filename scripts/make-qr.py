#!/usr/bin/env python3
"""Make the website QR code (SVG for print, PNG for sharing).

Scanning it with a phone camera shows the website link to tap.

    pip install segno
    python3 scripts/make-qr.py                       # current site address
    python3 scripts/make-qr.py https://example.com/  # a new address (e.g. a custom domain)

Writes assets/qr/website-qr.svg and assets/qr/website-qr.png. If the address
changes, regenerate before printing, and keep the old address working for any
QR codes already printed.
"""
import pathlib
import sys

import segno

URL = sys.argv[1] if len(sys.argv) > 1 else "https://drsovranrai.pages.dev/"
OUT = pathlib.Path(__file__).resolve().parent.parent / "assets" / "qr"
OUT.mkdir(parents=True, exist_ok=True)

# Error correction "H" still scans if up to ~30% is smudged or covered (useful on printed boards).
qr = segno.make(URL, error="h", micro=False)
dark = "#0a2148"  # site's dark blue; plenty of contrast on white for phone cameras

qr.save(OUT / "website-qr.svg", scale=10, border=4, dark=dark, light="#ffffff",
        title=f"QR code: {URL}")
qr.save(OUT / "website-qr.png", scale=30, border=4, dark=dark, light="#ffffff")
print(f"{URL}\n  version {qr.version}, error correction {qr.error}\n  wrote {OUT / 'website-qr.svg'}\n  wrote {OUT / 'website-qr.png'}")
