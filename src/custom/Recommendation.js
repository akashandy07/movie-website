import React, { useState } from 'react'
import { getRecommendations } from '../movies/Movie'
import { useEffect } from 'react'


const useRecommendation = (id) => {
    const [recommendation, setRecommendation] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            let data = await getRecommendations(id)
            setRecommendation(data.results)
            setLoading(false)

        }
        load()



    }, [id])

    return { recommendation, loading }
}

export default useRecommendation