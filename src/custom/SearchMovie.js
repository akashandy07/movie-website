// useSearchMovie.js
import { useState, useEffect } from 'react'
import { searchMovies } from '../movies/Movie'  // keep import here

export const useSearchMovie = (query) => {
    const [movies, setMovies] = useState([])  // ✅ renamed: stores results
 
    useEffect(() => {
        if (!query) return

        async function load() {
            const data = await searchMovies(query)
            setMovies(data)            // ✅ update movies, not query
        }

        load()
    }, [query])

    return { movies }       // ✅ return movies
}