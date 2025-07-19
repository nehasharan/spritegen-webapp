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

#### 2. Set up Frontend
npm install
npm start

