# 🕹️ SpriteGen Web App

**SpriteGen** is a web app that allows users to generate pixel art or 256×256 sprite sheets based on an uploaded image or simple character preferences. It supports animation actions like walking, jumping, falling, eating, and more — each rendered in 5–6 frame sequences.

> Ideal for indie game devs, artists, or anyone looking to create animated sprite sheets quickly using AI.

---

## ✨ Features

- Upload image or provide preferences (e.g., outfit colors, pose)
- Generate base sprite (256x256 pixel art)
- Choose from animation actions:
  - Walk Left / Right
  - Jump / Fall
  - Eat / Pass / Play
- Download the generated sprite sheet

---

## 🚀 Running the App Locally

### 🔧 Requirements

- Node.js and npm installed
- Python 3.8+ with `venv`
- OpenAI API key (or local Stable Diffusion setup – coming soon)

---

### 🔨 Setup

#### 1. Clone the Repo

```bash
git clone https://github.com/nehasharan/spritegen-webapp.git
cd spritegen-webapp

Set up Frontend
npm install
npm start

Set up Backend (in a new terminal)
cd backend/
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload

Create a .env file in the backend folder:
OPENAI_API_KEY=your_openai_key_here

Run backend with
uvicorn main:app --reload

run frontend with
npm start


