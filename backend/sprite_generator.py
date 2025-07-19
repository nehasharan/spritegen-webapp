import os
from uuid import uuid4
from PIL import Image, ImageDraw

def generate_sprite_sheet(image_path, action, top_color, bottom_color, accessories):
    # TODO: Replace with Stable Diffusion image generation

    # Placeholder image
    output_path = f"outputs/sprite_{uuid4()}.png"
    img = Image.new("RGBA", (256, 256), (255, 255, 255, 255))
    draw = ImageDraw.Draw(img)
    draw.text((20, 120), action, fill="black")

    os.makedirs("outputs", exist_ok=True)
    img.save(output_path)
    return output_path
