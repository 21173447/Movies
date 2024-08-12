// eslint-disable-next-line no-unused-vars
import React from 'react'

import sr1 from '../Images/61g+uzL0ohL._AC_SX679_.png'
import sr2 from '../Images/altered carbon.png'
import sr3 from '../Images/dark.png'
import sr4 from '../Images/fallout-2024-textless-official-posters-for-amazon-prime-v0-rtl87qakzxmc1.png'
import sr5 from '../Images/loki-1269834.png'
import sr6 from '../Images/only murder.png'
import sr7 from '../Images/RickandMortyPortalposter_1024x1024@2x.png'
import sr8 from '../Images/61OnotmyHiL._AC_UF1000,1000_QL80_.png'



const seriesData = [
    { id: 1, poster: sr1, title: 'Wednesday', discription: 'hgjghjggjgjghjg' },
    { id: 2, poster: sr2, title: 'Altered carbon' },
    { id: 3, poster: sr3, title: 'Dark  ' },
    { id: 4, poster: sr4, title: 'Fallout' },
    { id: 5, poster: sr5, title: 'Loki' },
    { id: 6, poster: sr6, title: 'Only murder' },
    { id: 7, poster: sr7, title: 'Rick & Morty' },
    { id: 8, poster: sr8, title: 'Last of Us' },
];






const Series = () => {
    return (

        <section className=''>
            <h5>LATEST SERIES</h5>
            <div className="grid grid-cols-2 gap-1  md:grid-cols-4  py-40" >
                {seriesData.map((series) => (
                    <div key={series.id} className="w-full flex justify-center items-center">
                        <img
                            src={series.poster}
                            alt={series.title}
                            className="w-60 h-full object-cover"/>
                    </div>
                ))}
            </div>

            <div className="flex justify-end py-5 p-10">
                <button className="bg-[#a6c1ee] text-white px-5 py-1 rounded-full hover:bg-[#87acec] text-2xl">
                    More
                </button>
            </div>

        </section>

    )
}

export default Series
