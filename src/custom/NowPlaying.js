import React, { useEffect } from 'react'
import { useState } from 'react'
import { getNowPlayingMovies } from '../movies/Movie'


export const useNowPlaying = () => {
    const [nowPlaying, setNowPlaying] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function load() {
            const data = await getNowPlayingMovies()
            setNowPlaying(data)
            setLoading(false)
        }
        load()
    }, [])

    return { nowPlaying, loading }
}
