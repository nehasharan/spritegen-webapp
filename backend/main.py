from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from sprite_generator import generate_sprite_sheet
import os
from uuid import uuid4

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # update this for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate/")
async def generate_sprite(
    image: UploadFile = File(...),
    action: str = Form(...),
    top_color: str = Form(default="red"),
    bottom_color: str = Form(default="blue"),
    accessories: str = Form(default="none")
):
    # Save uploaded image
    filename = f"uploads/{uuid4()}_{image.filename}"
    with open(filename, "wb") as f:
        f.write(await image.read())

    # Generate image
    output_path = generate_sprite_sheet(
        image_path=filename,
        action=action,
        top_color=top_color,
        bottom_color=bottom_color,
        accessories=accessories
    )

    return FileResponse(output_path, media_type="image/png")
