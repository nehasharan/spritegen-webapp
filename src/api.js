import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const generateSprite = async (formData) => {
  const response = await axios.post(`${API_URL}/generate/`, formData, {
    responseType: 'blob', // because it's an image
  });
  return response.data;
};