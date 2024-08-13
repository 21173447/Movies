import React, { useEffect, useState } from 'react';

const Series = () => {
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/series');
        const data = await response.json();
        setSeriesData(data);
      } catch (error) {
        console.error('Error fetching series data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <h5>LATEST SERIES</h5>
      <div className="grid grid-cols-2 gap-1 md:grid-cols-4 py-40">
        {seriesData.map((series) => (
          <div key={series.id} className="w-full flex justify-center items-center">
            <img
              src={series.poster}
              alt={series.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end py-5 p-10">
        <button className="bg-[#a6c1ee] text-white px-5 py-1 rounded-full hover:bg-[#87acec] text-2xl">
          More
        </button>
      </div>
    </section>
  );
};

export default Series;
