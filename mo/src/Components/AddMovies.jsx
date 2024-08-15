import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddMovies = () => {
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState({
    title: '',
    type: '', // Make sure this is either 'movie' or 'series'
    description: '',
    country: '',
    date: '',
    image: '', // Store image URL
  });

  const [imagePreview, setImagePreview] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'image') {
      setMovieData((prevState) => ({
        ...prevState,
        image: value, // Set image URL
      }));
      setImagePreview(value); // Update preview
    } else {
      setMovieData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();

    console.log('Submitting data:', movieData); // Debugging

    const newMovie = {
      ...movieData,
    };

    try {
      const response = await fetch(`http://localhost:3000/${movieData.type}s`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
      });

      if (!response.ok) {
        throw new Error('Failed to add movie/series');
      }

      toast.success('Movie/Series added successfully');
      navigate('/'); // Redirect to home or another page after successful submission
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to add movie/series');
    }
  };

  return (
    <section className="bg-white">
      <div className="container m-auto max-w-4xl py-24 flex">
        {/* Image URL Input Section */}
        <div className="flex-shrink-0 w-1/3 p-4">
          <div className="bg-gray-200 h-full flex items-center justify-center border border-gray-300 rounded-md">
            <img
              src={imagePreview || 'https://via.placeholder.com/300'}
              alt="Preview"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <input
            type="text"
            name="image"
            className="mt-4 border rounded w-full py-2 px-3"
            placeholder="Image URL"
            value={movieData.image}
            onChange={handleChange}
          />
        </div>

        <div className="w-2/3 p-4">
          <div className="bg-white px-6 py-8 mb-4 m-4 md:m-0 border border-gray-300 rounded-md">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-center mb-6">Add Movies/Series</h2>

              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 mb-2">
                  Movie/Series Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Movie / series name"
                  value={movieData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Movie/Series Description"
                  value={movieData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="country" className="block text-gray-700 mb-2">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="border rounded w-full py-2 px-3"
                  value={movieData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="South Africa">South Africa</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="border rounded w-full py-2 px-3"
                  value={movieData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex justify-center gap-8 p-9">
                <div>
                  <input
                    type="radio"
                    id="movie"
                    name="type"
                    value="movie"
                    className="mr-1 accent-blue-500"
                    checked={movieData.type === 'movie'}
                    onChange={handleChange}
                  />
                  <label htmlFor="movie">Movie</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="series"
                    name="type"
                    value="series"
                    className="mr-1 accent-blue-500"
                    checked={movieData.type === 'series'}
                    onChange={handleChange}
                  />
                  <label htmlFor="series">Series</label>
                </div>
              </div>

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddMovies;
