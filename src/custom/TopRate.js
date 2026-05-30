import React, { useEffect } from 'react'
import { useState } from 'react'
import { getRatedMovies } from '../movies/Movie'


export const useTopRate = () => {
    const [topRate, setTopRate] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function load() {
            const data = await getRatedMovies()
            setTopRate(data)
            setLoading(false)
        }
        load()
    }, [])

    return { topRate, loading }
}
