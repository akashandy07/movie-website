import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { getNowPlayingMovies } from '../movies/Movie'


// export const useNowPlaying = () => {
//     // const [nowPlaying, setNowPlaying] = useState([])
//     // const [loading, setLoading] = useState(true)
//     // useEffect(() => {
//     //     async function load() {
//     //         const data = await getNowPlayingMovies()
//     //         setNowPlaying(data)
//     //         setLoading(false)
//     //     }
//     //     load()
//     // }, [])

//     // return { nowPlaying, loading }

//     function nowplaying(state, action) {
//         switch (action.type) {
//             case 'LOADING-STATE':
//                 return { movies: [], error: false, loading: true }

//             case 'LOADING-DONE':
//                 return { movies: action.payload, error: false, loading: false }

//             case 'ERROR-LOADING':
//                 return { movies: [], error: true, loading: false }


//             default: state

//         }



//     }

//     const initialState = {
//         movies: [],
//         error: false,
//         loading: true,
//     };



//     const [state, dispatch] = useReducer(nowplaying, initialState)

//     useEffect(() => {
//         async function load() {
//             try {
//                 dispatch({ type: 'LOADING-STATE' })
//                 const data = await getNowPlayingMovies()
//                 dispatch({ type: 'LOADING-DONE', payload: data })

//             } catch (error) {
//                 dispatch({ type: 'ERROR-LOADING' })
//                 console.log('error duing fatch$', error);


//             }

//         }


//     }, [])
//     return { state }


// }



function nowplaying(state, action) {
    switch (action.type) {
        case 'LOADING-STATE':
            return { movies: [], error: false, loading: true }
        case 'LOADING-DONE':
            return { movies: action.payload, error: false, loading: false }
        case 'ERROR-LOADING':
            return { movies: [], error: true, loading: false }
        default:
            return state;  // ✅ FIXED: Added return
    }
}
export function useNowPlaying() {  // Named it as a hook

    const initialState = {
        movies: [],
        error: false,
        loading: true,
    };

    const [state, dispatch] = useReducer(nowplaying, initialState)

    useEffect(() => {
        async function load() {
            try {
                dispatch({ type: 'LOADING-STATE' })
                const data = await getNowPlayingMovies()
                dispatch({ type: 'LOADING-DONE', payload: data })
            } catch (error) {
                dispatch({ type: 'ERROR-LOADING' })
                console.log('error during fetch:', error);
            }
        }

        load();  // ✅ FIXED: Actually call the function
    }, [])

    return { state, dispatch }  // ✅ Also return dispatch if needed
}
