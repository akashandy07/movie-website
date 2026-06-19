import { useEffect, useReducer } from 'react';
import { getNowPlayingMovies } from '../movies/Movie';

// Reducer function
function moviesReducer(state, action) {
  switch (action.type) {
    case 'LOADING_START':
      return { movies: [], error: false, loading: true };

    case 'LOADING_SUCCESS':
      return { movies: action.payload, error: false, loading: false };

    case 'LOADING_ERROR':
      return { movies: [], error: true, loading: false };

    default:
      return state;  // ✅ Correctly returns state
  }
}

// Custom hook
export const useAiringToday= () => {
  const initialState = {
    movies: [],
    error: false,
    loading: true,
  };

  const [state, dispatch] = useReducer(moviesReducer, initialState);

  useEffect(() => {
    async function loadMovies() {
      dispatch({ type: 'LOADING_START' });

      try {
        const data = await getNowPlayingMovies();
        dispatch({ type: 'LOADING_SUCCESS', payload: data });
      } catch (err) {
        console.error('Error:', err);
        dispatch({ type: 'LOADING_ERROR' });
      }
    }

    loadMovies();  // ✅ Function is called
  }, []);

  return { state };
};