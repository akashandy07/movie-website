import React, { useEffect, useState } from 'react'
import { getMoviesByGenres } from '../movies/Movie'


export const useGeneMovie = (genreId) => {
    const [movie, SetMovie] = useState([])

    useEffect(() => {
        if (!genreId) return
        async function load() {
            const data = await getMoviesByGenres(genreId)
            SetMovie(data)
        }

        load()

    }, [genreId])



    return { movie }
}
