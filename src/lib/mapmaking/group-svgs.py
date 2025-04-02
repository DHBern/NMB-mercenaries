import xml.etree.ElementTree as ET

map_ids = ['full', 'europe', 'seasia', 'java', 'rivers']
file_paths = [
    './full-100-2.2-0.svg',
    './europe-100-2.2-0.svg',
    './seasia-100-2.2-0.svg',
    './java-100-2.2-0.svg',
    './rivers-100-7-0.54.svg'
]

# Load the first SVG as the base
base_path = file_paths[0]
with open(base_path, "r", encoding="utf-8") as f:
    root = ET.fromstring(f.read())

# Tweak attributes
root.set("class", "animated-svg")
root.set("viewBox", "0 0 800 600")
root.attrib.pop("width", None)
root.attrib.pop("height", None)
root.attrib.pop("baseProfile", None)
root.attrib.pop("version", None)

# Remove <defs> elements
for defs in root.findall(".//{http://www.w3.org/2000/svg}defs"):
    root.remove(defs)

# Process each SVG
for idx, path in enumerate(file_paths):
    print(map_ids[idx])
    try:
        with open(path, "r", encoding="utf-8") as f:
            svg_tree = ET.fromstring(f.read())
        
        for circle in svg_tree.findall(".//{http://www.w3.org/2000/svg}circle"):
            class_name = circle.get("class")
            r_value = circle.get("r")
            if class_name and r_value:
                for target in root.findall(f".//{{http://www.w3.org/2000/svg}}circle[@class='{class_name}']"):
                    existing_style = target.get("style", "")
                    new_style = f"--{map_ids[idx]}: {r_value};"
                    target.set("style", f"{existing_style} {new_style}".strip())
    except Exception as e:
        print(f"Error processing {path}: {e}")

# Remove namespace prefixes
for elem in root.iter():
    if '}' in elem.tag:
        elem.tag = elem.tag.split('}', 1)[1]  # Remove namespace

# Save the modified SVG
ET.ElementTree(root).write("group-noprefix.svg")
