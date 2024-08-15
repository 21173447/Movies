import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Latest = () => {
  const [movies, setMovies] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/movies');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies data:', error);
      }
    };

    fetchData();
  }, []);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const visibleMovies = showMore ? movies : movies.slice(0, 6);

  return (
    <section>
      <h5 className="">LATEST MOVIES</h5>
      <div className="flex flex-wrap justify-center gap-1 py-40">
        {visibleMovies.map((movie) => (
          <div key={movie.id} className="flex justify-center items-center p-2 w-1/3 md:w-1/4 lg:w-1/4">
            <Link to={`/movies/${movie.id}`} className="block">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-80 h-100 object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
      <button onClick={handleToggle} className="mt-4 p-2 bg-blue-500 text-white">
        {showMore ? 'Less' : 'More'}
      </button>

      <div className="mt-4 text-center">
        <Link to="/add">
          <button className='p-1 bg-blue-500 text-white'>ADD</button>
        </Link>
      </div>
    </section>
  );
};

export default Latest;
