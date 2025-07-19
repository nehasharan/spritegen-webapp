from dotenv import load_dotenv
import os
import openai

# Load environment variables from .env file
load_dotenv()

def generate_pixel_art(prompt: str, size: str = "1024x1024", n: int = 1):
    response = openai.images.generate(
        model="dall-e-3",
        prompt=prompt,
        size=size,  # valid sizes: "1024x1024", "1024x1792", "1792x1024"
        quality="standard",
        n=n,
    )
    return response.data[0].url
