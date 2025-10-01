#!/usr/bin/env bash
# Generates PNG/ICO/apple-touch-icon fallbacks from favicon.svg
# Requires ImageMagick (magick) or rsvg-convert + convert
set -euo pipefail
cd "$(dirname "$0")/.." || exit 1
SVG_FILE="favicon.svg"
OUT_DIR="."

if [ ! -f "$SVG_FILE" ]; then
  echo "Error: $SVG_FILE not found in project root. Place favicon.svg at project root and try again."
  exit 2
fi

if command -v magick >/dev/null 2>&1; then
  echo "Using ImageMagick (magick) to generate favicons..."
  magick convert -background none "$SVG_FILE" -resize 16x16 "$OUT_DIR/favicon-16x16.png"
  magick convert -background none "$SVG_FILE" -resize 32x32 "$OUT_DIR/favicon-32x32.png"
  magick convert -background none "$SVG_FILE" -resize 180x180 "$OUT_DIR/apple-touch-icon.png"
  # Create multi-size ICO (common sizes 16x16 and 32x32)
  magick "$OUT_DIR/favicon-16x16.png" "$OUT_DIR/favicon-32x32.png" "$OUT_DIR/favicon.ico"
  echo "Generated: favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png, favicon.ico"
  exit 0
fi

if command -v rsvg-convert >/dev/null 2>&1 && command -v convert >/dev/null 2>&1; then
  echo "Using rsvg-convert + ImageMagick convert to generate favicons..."
  rsvg-convert -w 16 -h 16 "$SVG_FILE" -o "$OUT_DIR/favicon-16x16.png"
  rsvg-convert -w 32 -h 32 "$SVG_FILE" -o "$OUT_DIR/favicon-32x32.png"
  rsvg-convert -w 180 -h 180 "$SVG_FILE" -o "$OUT_DIR/apple-touch-icon.png"
  convert "$OUT_DIR/favicon-16x16.png" "$OUT_DIR/favicon-32x32.png" "$OUT_DIR/favicon.ico"
  echo "Generated: favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png, favicon.ico"
  exit 0
fi

echo "ImageMagick (magick) or rsvg-convert + convert are required. Install via:"
echo "  brew install imagemagick            # provides magick"
echo "or"
echo "  brew install librsvg imagemagick"
exit 3
