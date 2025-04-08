from PIL import Image
import svgwrite

def image_to_svg(image_name, grid_width, brightness_factor, cutoff_radius=0):

    r_scale = 5
    image_path = f'{image_name}.jpg'
    output_svg = f'{image_name}-{grid_width}-{brightness_factor}-{cutoff_radius}.svg'

    # Load the image and convert it to grayscale
    img = Image.open(image_path).convert('L')

    # Maintain aspect ratio
    img_ratio = img.width / img.height
    new_width = grid_width
    new_height = int(grid_width / img_ratio)

    img = img.resize((new_width, new_height))

    # Create the SVG drawing
    dwg = svgwrite.Drawing(output_svg, profile='tiny', size=(f'{new_width*r_scale*2}px', f'{new_height*r_scale*2}px'))

    # Determine circle positions and sizes
    for y in range(new_height):
        for x in range(new_width):
            brightness = img.getpixel((x, y)) / 255.0  # Normalize to range [0,1]
            radius = (1 - brightness * brightness_factor) * r_scale  # Invert so dark areas have larger circles
            if radius < cutoff_radius*r_scale:
                radius = 0
            cx, cy = x * r_scale * 2 + r_scale, y * r_scale * 2 + r_scale
            dwg.add(dwg.circle(center=(cx, cy), r=radius, fill='black', **{'class': f'circle-{y}-{x}'}))

    # Save the SVG file
    dwg.save()
    print(f'SVG saved to {output_svg}')

# Example usage
image_to_svg("portrait-brunnen", 70, 1)
image_to_svg("portrait-neuhaus", 70, 1)
image_to_svg("portrait-heilmann", 70, 1)
#image_to_svg("full", 100, 2.2)
#image_to_svg("seasia", 100, 2.2)
#image_to_svg("europe", 100, 2.2)
#image_to_svg("java", 100, 2.2)
#image_to_svg("rivers", 100, 7, 0.54)
