import React from "react";
import im1 from '../Images/avengers.png'
// Card component
const Card = ({ movie }) => {
  return (
    <div className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={movie.imageUrl} alt={movie.title} />
      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.description}</p>
        <ul className="mb-4">
          <li><strong>Country:</strong> {movie.country}</li>
          <li><strong>Genre:</strong> {movie.genre}</li>
          <li><strong>Year:</strong> {movie.year}</li>
          <li><strong>Type:</strong> {movie.type}</li>
        </ul>
        <div className="flex justify-between">
          <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Edit
          </button>
          <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

// App component
function App() {
  const movie = {
    imageUrl: im1, 
    title: "Avengers Endgame",
    description: "After the devastating events of Avengers: Infinity War, the universe is in ruins...",
    country: "USA",
    genre: "Action, Adventure, Science Fiction",
    year: "2019",
    type: "Movie"
  };

  return (
    <div className="App flex justify-center items-center h-screen">
      <Card movie={movie} />
    </div>
  );
}

export default App;
