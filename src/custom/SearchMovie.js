// useSearchMovie.js
import { useReducer, useEffect } from 'react'
import { searchMovies } from '../movies/Movie'

const initialState = {
    movies: [],
    loading: false,
    error: null
}

function searchReducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return { ...state, loading: true, error: null }
        case 'SUCCESS':
            return { ...state, loading: false, movies: action.payload }
        case 'ERROR':
            return { ...state, loading: false, error: action.payload, movies: [] }
        case 'RESET':
            return initialState
        default:
            return state
    }
}

export const useSearchMovie = (query) => {
    const [state, dispatch] = useReducer(searchReducer, initialState)

    useEffect(() => {
        if (!query) {
            dispatch({ type: 'RESET' })
            return
        }

        const timer = setTimeout(async () => {
            dispatch({ type: 'LOADING' })
            try {
                const data = await searchMovies(query)
                dispatch({ type: 'SUCCESS', payload: data })
            } catch (err) {
                dispatch({ type: 'ERROR', payload: 'Something went wrong. Try again.' })
            }
        }, 400)

        return () => clearTimeout(timer)
    }, [query])

    return state // returns { movies, loading, error }
}