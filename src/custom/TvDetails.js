import { useState, useEffect } from 'react'
import { getTvDetails } from '../movies/Movie'

export const useTvDetails = (seriesId) => {
  const [tvData, setTvData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!seriesId) return

    const fetchDetails = async () => {
      try {
        setLoading(true)
        const data = await getTvDetails(seriesId)
        setTvData(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDetails()
  }, [seriesId])

  return { tvData, loading, error }
}