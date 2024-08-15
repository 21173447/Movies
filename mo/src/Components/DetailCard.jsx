import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import DeleteButton from './DeleteButton';
import { toast } from 'react-toastify';

const DetailCard = () => {
  const item = useLoaderData();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(item);

  if (!item) return <div>No data available</div>;

  const validTypes = ['movies', 'series'];
  const itemType = validTypes.includes(item.type) ? item.type : 'movies'; // Default to 'movies'

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Save updated data
    fetch(`http://localhost:3000/${itemType}s/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success('Movie/Series Updated Successfully');
        setIsEditing(false); // Exit edit mode after saving
        setFormData(data); // Update with the saved data
      })
      .catch((error) => {
        console.error('Error updating data:', error);
        toast.error('Failed to update Movie/Series');
      });
  };

  const handleDeleteSuccess = () => {
    navigate('/'); 
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-4">
        {isEditing ? (
          <>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="year" className="block text-gray-700 font-bold mb-2">
                Year
              </label>
              <input
                type="text"
                id="year"
                name="year"
                className="border rounded w-full py-2 px-3"
                value={formData.year}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="border rounded w-full py-2 px-3"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>

            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2"
            >
              Save
            </button>
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl mb-4">{item.title}</h2>
            <img src={item.poster} alt={item.title} className="w-full mb-4" />
            <p className="mb-2"><strong>Description:</strong> {item.description}</p>
            {item.year && <p className="mb-2"><strong>Year:</strong> {item.year}</p>}
            {item.country && <p className="mb-2"><strong>Country:</strong> {item.country}</p>}
            
            <div className="mt-4 flex gap-4">
              <button 
                onClick={handleEditToggle} 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <DeleteButton 
                itemType={itemType} 
                itemId={item.id} 
                onDeleteSuccess={handleDeleteSuccess} 
              />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DetailCard;
