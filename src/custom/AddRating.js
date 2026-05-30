import React from 'react'
import { postRating } from '../movies/Movie'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'


export const useAddRating = () => {
    const [rating, setRating] = useState('')
    const { sessionId } = useAuth()

    async function submitrating(movieId) {
        await postRating(movieId, rating, sessionId)
        alert("Rating submitted successfully!")
        setRating('')

    }

    return { rating, setRating, submitrating }
}
