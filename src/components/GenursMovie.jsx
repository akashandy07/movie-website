// GenursMovie.jsx
import React, { useState } from 'react'
import { useGenres } from '../custom/Genres'
import { useGeneMovie } from '../custom/GeneresMovie'
import { useMovieActions } from '../custom/Videos'
import { useNavigate } from 'react-router-dom'

import './Genres.css'


const GenursMoviess = () => {
    const [selectedGenreId, setSelectedGenreId] = useState(null)
    const { genres, loading } = useGenres()
    const { movie } = useGeneMovie(selectedGenreId)  // pass selected id
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
    const FALLBACK_IMG = "https://via.placeholder.com/300x450?text=No+Image";
    const { handlePlay } = useMovieActions();
    const navigate = useNavigate()

    return (
        <>

            <div className='genres-Container'>
                <h4>Genres Movie</h4>
                <div className='genres-section'>

                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className='genres-buttons' onClick={() => navigate()}>
                            {genres.map((genre) => (
                                <button
                                    key={genre.id}
                                    onClick={() => setSelectedGenreId(genre.id)}

                                >

                                    {genre.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Movies List */}
            <div className='movies-list'>

                <div className='movies-header'>

                    {movie.map((m) => (
                        <div key={m.id} className='movie-item'
                            onClick={() => navigate(`/movie/${m.id}`)}>

                            <img
                                src={
                                    m.poster_path
                                        ? `${BASE_IMG_URL}${m.poster_path}`
                                        : FALLBACK_IMG
                                }
                                alt={m.title}
                            />


                            <div className='hoverplays'>
                                <button onClick={(e) => {
                                    e.stopPropagation()
                                    handlePlay(m.id)
                                }}>▶ Play</button>
                            </div>
                        </div>




                    ))}
                </div>
            </div>


        </>
    )
}

export default GenursMoviess