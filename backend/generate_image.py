from dotenv import load_dotenv
import os
import openai

# Load environment variables from .env file
load_dotenv()

def generate_prompt(action: str, top_color: str, bottom_color: str, accessories: str, style: str = "pixel"):
    prompt = (
        f"pixel art character, {gender}, {race}, {age}, "
        f"{skin} skin, {hairstyle} {haircolor} hair, "
        f"wearing {outfit} outfit, {accessories if accessories != 'none' else ''}, "
        f"{action} pose, 16-bit sprite style, detailed face"
    )
    return prompt

def generate_pixel_art(prompt: str, size: str = "1024x1024", n: int = 1):
    response = openai.images.generate(
        model="dall-e-3",
        prompt=prompt,
        size=size,  # valid sizes: "1024x1024", "1024x1792", "1792x1024"
        quality="standard",
        n=n,
    )
    return response.data[0].url
