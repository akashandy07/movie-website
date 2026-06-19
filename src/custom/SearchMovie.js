// useSearchMovie.js
import { useState, useEffect } from 'react'
import { searchMovies } from '../movies/Movie'  // keep import here

export const useSearchMovie = (query) => {
    const [movies, setMovies] = useState([])  // ✅ renamed: stores results

    useEffect(() => {
        if (!query) return

        const timer = setTimeout(async () => {
            // this only runs if user stops typing for 400ms
            const data = await searchMovies(query)
            setMovies(data)
        }, 400)

        return () => clearTimeout(timer)  // ← if user types again, cancel the previous timer
    }, [query])

    return { movies }      
}