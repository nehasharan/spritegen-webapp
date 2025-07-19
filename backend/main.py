from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import requests
import os
from uuid import uuid4
from generate_image import generate_pixel_art

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate/")
async def generate_sprite(
    gender: str = Form(...),
    race: str = Form(...),
    age: str = Form(...),
    skin: str = Form(...),
    hairstyle: str = Form(...),
    haircolor: str = Form(...),
    outfit: str = Form(...),
    accessories: str = Form(...),
    action: str = Form(...)
):
    # Build the prompt
    prompt = (
        f"Pixel art sprite of a {age} {race} {gender} character with {skin} skin, "
        f"{hairstyle} {haircolor} hair, wearing a {outfit} outfit"
        f"{' and wearing ' + accessories if accessories != 'none' else ''}, "
        f"{action.replace('_', ' ')} animation frame, 16-bit style, highly detailed, transparent background"
    )

    image_url = generate_pixel_art(prompt)

    img_data = requests.get(image_url).content
    os.makedirs("outputs", exist_ok=True)
    output_path = f"outputs/{uuid4()}.png"
    with open(output_path, 'wb') as handler:
        handler.write(img_data)

    return FileResponse(output_path, media_type="image/png")
