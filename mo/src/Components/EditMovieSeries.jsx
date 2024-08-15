import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditMovieSeries = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState({
    title: '',
    type: '',
    description: '',
    year: '',
    country: '',
    poster: '', // Store base64 string
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    if (id && type) {
      fetch(`http://localhost:3000/${type}s/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setMovieData(data);
          setImagePreview(data.poster);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [id, type]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result); // Base64 string
    };
    if (file) {
      reader.readAsDataURL(file); // Convert to base64
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const updatedMovie = {
      ...movieData,
      type,
      poster: imagePreview, // Use the base64 string
    };

    fetch(`http://localhost:3000/${type}s/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success('Movie/Series Updated Successfully');
        navigate(`/${type}s/${id}`);
      })
      .catch((error) => {
        console.error('Error updating data:', error);
        toast.error('Failed to update Movie/Series');
      });
  };

  return (
    <section className="bg-white">
      <div className="container m-auto max-w-6xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    
          <form onSubmit={submitForm} className="order-2 md:order-1">
            <h2 className="text-3xl text-center font-semibold mb-6">Edit Movie/Series</h2>

            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3"
                placeholder="Movie/Series Title"
                required
                value={movieData.title}
                onChange={handleChange}
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
                placeholder="Description"
                value={movieData.description}
                onChange={handleChange}
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
                placeholder="Year"
                value={movieData.year}
                onChange={handleChange}
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
                placeholder="Country"
                value={movieData.country}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="poster" className="block text-gray-700 font-bold mb-2">
                Poster Image
              </label>
              <input
                type="file"
                id="poster"
                name="poster"
                className="border rounded w-full py-2 px-3"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Movie/Series
              </button>
            </div>
          </form>

          <div className="order-1 md:order-2">
            <img
              src={imagePreview || 'https://via.placeholder.com/300'}
              alt={movieData.title || 'Movie/Series Poster'}
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditMovieSeries;
