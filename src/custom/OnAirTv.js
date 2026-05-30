import React, { useEffect } from 'react'
import { useState } from 'react'
import { getOnTheAir } from '../movies/Movie'


export const useOnTheAir = () => {
    const [onTheAir, setOnTheAir] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function load() {
            const data = await getOnTheAir()
            setOnTheAir(data)
            setLoading(false)
        }
        load()
    }, [])

    return { onTheAir, loading }
}
