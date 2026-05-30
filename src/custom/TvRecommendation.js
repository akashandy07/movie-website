import { useState, useEffect } from 'react'
import { getTvRecommendations } from '../movies/Movie'

export const useTvRecommendation = (seriesId) => {
    const [recommendation, setRecommendation] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            const data = await getTvRecommendations(seriesId)
            setRecommendation(data.results)
            setLoading(false)
        }
        load()
    }, [seriesId])

    return { recommendation, loading }  // ✅ removed load — not accessible here
}