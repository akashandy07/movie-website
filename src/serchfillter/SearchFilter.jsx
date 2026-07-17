// SearchFilter.jsx
import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useSearchMovie } from '../custom/SearchMovie'
import { useMovieActions } from '../custom/Videos'
import './SearchFilter.css'

const SearchFilter = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("query")
    const { movies, loading, error } = useSearchMovie(query)  // ✅ useReducer states
    const navigate = useNavigate()
    const { handlePlay } = useMovieActions()

    return (
        <div className="search-results">

            {/* Loading state */}
            {loading && (
                <p className="status-msg">Searching for "{query}"...</p>
            )}

            {/* Error state */}
            {error && (
                <p className="status-msg error">{error}</p>
            )}

            {/* No results */}
            {!loading && !error && movies.length === 0 && (
                <p className="status-msg">No results found for "{query}"</p>
            )}

            {/* Results */}
            {!loading && !error && movies.length > 0 && (
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
            )}

        </div>
    )
}

export default SearchFilter