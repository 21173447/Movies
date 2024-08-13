import React, { useEffect, useState } from 'react';

const Latest = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/movies');
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);


  

  return (
    <section>
      <h5>LATEST MOVIES</h5>
      <div className="grid grid-cols-2 gap-1 md:grid-cols-4 py-40">
        {movieData.map((movie) => (
          <div key={movie.id} className="w-full flex justify-center items-center">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-60 h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end py-5">
        <button className="bg-[#a6c1ee] text-white px-5 py-1 rounded-full hover:bg-[#87acec] text-2xl">
          More
        </button>
      </div>
    </section>
  );
};

export default Latest;
