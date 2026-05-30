import React from 'react'
import { getTvShowWeek } from '../movies/Movie'
import { useEffect, useState } from 'react'

export const useTvDay = () => {
    const [tvDay, setTv] = useState([])
    const [loadings, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            const data = await getTvShowWeek()
            setTv(data)
            setLoading(false)
        }
        load()
    }, [])

    return { tvDay, loadings }
}
