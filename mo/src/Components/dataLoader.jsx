// src/Components/dataLoader.jsx
import { json } from 'react-router-dom';

export const detailCardLoader = async ({ params }) => {
  const { type, id } = params;

  if (!['movies', 'series'].includes(type)) {
    throw new Error(`Invalid type ${type}. Valid types are movies, series`);
  }

  const endpoint = `${type}/${id}`;

  try {
    const response = await fetch(`http://localhost:3000/${endpoint}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
