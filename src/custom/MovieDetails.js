// useMovieDetails.js
import { useQuery } from '@tanstack/react-query'
import { getMovieDetails } from '../movies/Movie'

export const useMovieDetails = (id) => {
    const { data: details = {}, isLoading: loading } = useQuery({
        queryKey: ['movieDetails', id],
        queryFn: () => getMovieDetails(id),
        enabled: !!id
    })

    return { details, loading }
}