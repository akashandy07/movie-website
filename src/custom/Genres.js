import React from 'react'
import { useState, useEffect } from 'react'

import { getMovieGenres } from '../movies/Movie'


export const useGenres = () => {
    const [genres, setGenres] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            const data = await getMovieGenres();
            console.log( data.data.genres);

            // console.log("API Response:", data);
            // console.log("Genres:", data.data.genres);

            setGenres(data.data.genres);
            setLoading(false);
        }
        load()
    }, [])
    return { genres, loading }
}

