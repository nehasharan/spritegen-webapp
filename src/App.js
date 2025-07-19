import React, { useState } from 'react';

export default function SpriteGenApp() {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    style: 'pixel',
    shirt: 'red',
    pants: 'blue',
    shoes: 'brown',
    actions: ['walk_left'],
    frames: 5,
  });

  const handleFileChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updated = [...formData.actions];
    if (checked) {
      updated.push(value);
    } else {
      updated = updated.filter((a) => a !== value);
    }
    setFormData({ ...formData, actions: updated });
  };

  const handleSubmit = async () => {
    console.log('Submitting with:', formData);
    alert('Feature not yet connected to backend.');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Pixel Sprite Sheet Generator</h1>

      <label className="block mb-2">Upload Image:</label>
      <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />

      {image && <img src={image} alt="Uploaded preview" className="w-48 mb-4 border" />}

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>Style:</label>
          <select name="style" value={formData.style} onChange={handleChange} className="w-full">
            <option value="pixel">Pixel</option>
            <option value="chibi">Chibi</option>
            <option value="retro">Retro</option>
          </select>
        </div>

        <div>
          <label>Shirt Color:</label>
          <input name="shirt" value={formData.shirt} onChange={handleChange} className="w-full" />
        </div>

        <div>
          <label>Pants Color:</label>
          <input name="pants" value={formData.pants} onChange={handleChange} className="w-full" />
        </div>

        <div>
          <label>Shoes Color:</label>
          <input name="shoes" value={formData.shoes} onChange={handleChange} className="w-full" />
        </div>

        <div>
          <label>Frames per Action: {formData.frames}</label>
          <input
            type="range"
            name="frames"
            min="4"
            max="6"
            value={formData.frames}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div>
          <label>Actions:</label>
          <div className="flex flex-wrap gap-2">
            {['walk_left', 'walk_right', 'jump', 'fall', 'eat', 'play'].map((action) => (
              <label key={action} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={action}
                  checked={formData.actions.includes(action)}
                  onChange={handleCheckboxChange}
                  className="mr-1"
                />
                {action.replace('_', ' ')}
              </label>
            ))}
          </div>
        </div>
      </div>

      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
        Generate Sprite Sheet
      </button>
    </div>
  );
}
