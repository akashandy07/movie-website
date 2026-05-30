import React from 'react'
import { useOnTheAir } from '../custom/OnAirTv'
import { useNavigate } from "react-router-dom";
import { useTvActionss } from '../custom/TvVideos'

const AirTv = () => {
    const { onTheAir, loading } = useOnTheAir()
    const navigate = useNavigate()
    const { handlePlay } = useTvActionss();

    const BASE_IMG_URL = "https://image.tmdb.org/t/p/w300";
    const FALLBACK_IMG = "https://via.placeholder.com/300x450?text=No+Image";
    return (
        <div>

            <div className='tv-section'>
                <h1>On The Air TV Shows</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className='tv-grid'>
                        {onTheAir.map((show) => (
                            <div key={show.id} className='tv-card' onClick={() => navigate(`/tv/${show.id}`)}>
                                <img
                                    src={show.poster_path ? `${BASE_IMG_URL}${show.poster_path}` : FALLBACK_IMG}
                                    alt={show.name}
                                />
                                <div className="card-info">
                                    <h3>{show.name}</h3>
                                    <button onClick={(e) => { e.stopPropagation(); handlePlay(show.id) }}>
                                        ▶ Watch
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                )}

            </div>
        </div>
    )
}

export default AirTv