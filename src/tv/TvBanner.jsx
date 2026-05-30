import React from 'react'
import { useTvShow } from '../custom/TvShow'
import { useTvActionss } from '../custom/TvVideos'

import './Tv.css'
const TvBanner = () => {
    const { tv, loading } = useTvShow()
    const { handlePlay } = useTvActionss();


    if (loading) return <h1>Loading...</h1>

    // choose random show
    const randomShow = tv[Math.floor(Math.random() * tv.length)]

    return (
        <div className='tv-banner'>
            <div className="content">
                <img
                    src={`https://image.tmdb.org/t/p/original/${randomShow?.backdrop_path}`}
                    alt={randomShow?.name}
                />
                <div className="info">
                    <h1>{randomShow?.name}</h1>


                    <p>
                        {randomShow?.overview?.slice(0, 100)}...
                    </p>
                    <button onClick={() => handlePlay(randomShow.id)}>watch</button>

                </div>
            </div>
        </div>
    )
}

export default TvBanner