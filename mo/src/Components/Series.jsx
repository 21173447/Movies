import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/series');
        const data = await response.json();
        setSeries(data);
      } catch (error) {
        console.error('Error fetching series data:', error);
      }
    };

    fetchData();
  }, [navigate]); // Refetch data when the navigate function changes

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const visibleSeries = showMore ? series : series.slice(0, 6); // Adjust the number based on how many you want to show initially

  return (
    <section>
      <h5 className="">LATEST SERIES</h5>
      <div className="flex flex-wrap justify-center gap-1 py-40">
        {visibleSeries.map((serie) => (
          <div key={serie.id} className="flex justify-center items-center p-1 w-1/3 md:w-1/4 lg:w-1/4">
            <Link to={`/series/${serie.id}`} className="block">
              <img
                src={serie.poster}
                alt={serie.title}
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
          <button className="p-2 bg-blue-500 text-white">
            ADD
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Series;
