import React, { useState } from 'react';
import './index.css';

export default function SpriteGenApp() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    gender: 'female',
    race: 'asian',
    age: 'adult',
    skin: 'olive',
    hairstyle: 'long',
    haircolor: 'black',
    outfit: 'casual',
    accessories: 'none',
    action: 'walk_left'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
  const body = new FormData();
  for (const key in formData) {
    body.append(key, formData[key]);
  }

  setLoading(true); // START LOADING

  try {
    const res = await fetch('http://localhost:8000/generate/', {
      method: 'POST',
      body,
    });

    const blob = await res.blob();
    const imgUrl = URL.createObjectURL(blob);
    setImage(imgUrl);
  } catch (err) {
    alert('Error generating sprite');
    console.error(err);
  } finally {
    setLoading(false); // STOP LOADING
  }
};

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Pixel Sprite Sheet Generator</h1>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className="w-full">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label>Race:</label>
          <select name="race" value={formData.race} onChange={handleChange} className="w-full">
            <option value="asian">Asian</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="hispanic">Hispanic</option>
            <option value="mixed">Mixed</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label>Age:</label>
          <select name="age" value={formData.age} onChange={handleChange} className="w-full">
            <option value="child">Child</option>
            <option value="teen">Teen</option>
            <option value="adult">Adult</option>
            <option value="elder">Elder</option>
          </select>
        </div>

        <div>
          <label>Skin Tone:</label>
          <select name="skin" value={formData.skin} onChange={handleChange} className="w-full">
            <option value="pale">Pale</option>
            <option value="fair">Fair</option>
            <option value="medium">Medium</option>
            <option value="olive">Olive</option>
            <option value="brown">Brown</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div>
          <label>Hair Style:</label>
          <select name="hairstyle" value={formData.hairstyle} onChange={handleChange} className="w-full">
            <option value="short">Short</option>
            <option value="long">Long</option>
            <option value="curly">Curly</option>
            <option value="braided">Braided</option>
            <option value="ponytail">Ponytail</option>
            <option value="bald">Bald</option>
          </select>
        </div>

        <div>
          <label>Hair Color:</label>
          <select name="haircolor" value={formData.haircolor} onChange={handleChange} className="w-full">
            <option value="black">Black</option>
            <option value="brown">Brown</option>
            <option value="blonde">Blonde</option>
            <option value="red">Red</option>
            <option value="gray">Gray</option>
            <option value="blue">Blue</option>
            <option value="pink">Pink</option>
          </select>
        </div>

        <div>
          <label>Outfit Style:</label>
          <select name="outfit" value={formData.outfit} onChange={handleChange} className="w-full">
            <option value="casual">Casual</option>
            <option value="fantasy">Fantasy</option>
            <option value="ninja">Ninja</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="armor">Armor</option>
          </select>
        </div>

        <div>
          <label>Accessories:</label>
          <select name="accessories" value={formData.accessories} onChange={handleChange} className="w-full">
            <option value="none">None</option>
            <option value="hat">Hat</option>
            <option value="glasses">Glasses</option>
            <option value="earrings">Earrings</option>
            <option value="headphones">Headphones</option>
          </select>
        </div>

        <div>
          <label>Action:</label>
          <select name="action" value={formData.action} onChange={handleChange} className="w-full">
            <option value="walk_left">Walk Left</option>
            <option value="walk_right">Walk Right</option>
            <option value="jump">Jump</option>
            <option value="fall">Fall</option>
            <option value="eat">Eat</option>
            <option value="play">Play</option>
          </select>
        </div>
      </div>

      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>
        {loading ? 'Generating...' : 'Generate Sprite Sheet'}
      </button>

      {loading && <p className="text-blue-600 mt-2">Hang tight, your sprite is being created...</p>}

      {image && <img src={image} alt="Generated sprite" className="mt-4 border" />}
      {image && (
        <a
          href={image}
          download="sprite.png"
          className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Download Sprite as PNG
        </a>
      )}
    </div>
  );
}
