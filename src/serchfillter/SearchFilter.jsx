import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useSearchMovie } from '../custom/SearchMovie'
import { useMovieActions } from '../custom/Videos'
import './SearchFilter.css'
const { handlePlay } = useMovieActions();
const SearchFilter = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("query") // ✅ read query from URL
    const { movies } = useSearchMovie(query) // ✅ fetch movies using query
    const navigate = useNavigate()

    return (
        <div className="search-results">
            {movies.length > 0 ? (
                movies.map(movie => (
                    <div
                        key={movie.id}
                        className="MOVIE"
                        onClick={() => navigate(`/movie/${movie.id}`)}
                    >
                        <img
                            src={
                                movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                                    : "https://via.placeholder.com/100x150?text=No+Image"
                            }
                            alt={movie.title}
                        />
                        <div className='hoverplays'>
                            <button onClick={(e) => {
                                e.stopPropagation()
                                handlePlay(movie.id)
                            }}>▶ Play</button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No results found for "{query}"</p>
            )}
        </div>
    )
}

export default SearchFilter