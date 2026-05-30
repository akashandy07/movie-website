import React, { useEffect } from 'react'
import { getTvShow } from '../movies/Movie'
import { useState } from 'react'


export const useTvShow = () => {
    const [tv, setTv] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            const res = await getTvShow()
            setTv(res)
            setLoading(false)
        }
        load()

    }, [])



    return { tv, loading }
}
