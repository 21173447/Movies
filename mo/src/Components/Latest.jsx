// eslint-disable-next-line no-unused-vars
import React from "react";
import mv1 from '../Images/avengers.png'
import mv2 from '../Images/a-hidden-life-poster.png'
import mv3 from '../Images/death-of-dick-long.png'
import mv4 from '../Images/nightingale-1.png'
import mv5 from '../Images/JokerPoster1200_5ca3c435318d42.29270548.png'
import mv6 from '../Images/wonder-woman-1984.png'
import mv7 from '../Images/john-wick-chapter-three.png'
import mv8 from '../Images/us-1.png'


const movieData = [
  { id: 1, poster: mv1, title: 'Avengers: Endgame',discription:'hgjghjggjgjghjg'},
  { id: 2, poster: mv2, title: 'A Hidden Life' },
  { id: 3, poster: mv3, title: 'The Death of Dick Long' },
  { id: 4, poster: mv4, title: 'The Nightingale' },
  { id: 5, poster: mv5, title: 'Joker' },
  { id: 6, poster: mv6, title: 'Wonder Woman 1984' },
  { id: 7, poster:mv7, title: 'Jhon Wick' },
  { id: 8, poster:mv8, title: 'Us' },
];


const Latest = () => {
  

  return (
    <section className=''>
      <h5>LATEST MOVIES</h5>
      <div className="grid grid-cols-2 gap-1  md:grid-cols-4  py-40" >

        
        {movieData.map((movie) => (
          <div key={movie.id} className="w-full flex justify-center items-center">
            <img 
              src={movie.poster} 
              alt={movie.title}
              className="w-60 h-full object-cover "

              
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
  )
};
export default Latest;