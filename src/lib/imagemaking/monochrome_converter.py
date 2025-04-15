import sys
import os
from PIL import Image, ImageOps

def hex_to_rgb(hex_color):
    """Convert hex color to RGB tuple."""
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def convert_to_monochrome(input_filename, output_suffix, hex_color):
    base, ext = os.path.splitext(input_filename)
    output_filename = f"{base}{output_suffix}{ext}"

    with Image.open(input_filename) as img:
        gray = ImageOps.grayscale(img)
        color_img = ImageOps.colorize(gray, black="black", white=hex_color)
        color_img.save(output_filename)
        print(f"Saved: {output_filename}")

def main():
    if len(sys.argv) != 4:
        print("Usage: python monochrome_converter.py <input_filename> <output_suffix> <hex_color>")
        sys.exit(1)

    input_filename = sys.argv[1]
    output_suffix = sys.argv[2]
    hex_color = sys.argv[3]

    convert_to_monochrome(input_filename, output_suffix, hex_color)

if __name__ == "__main__":
    main()
