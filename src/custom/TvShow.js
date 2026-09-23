// useTvShow.js
import { useQuery } from '@tanstack/react-query'
import { getTvShow } from '../movies/Movie'

export const useTvShow = () => {
    const { data: tv = [], isLoading: loading } = useQuery(
        {
            queryKey: ['tvshows'],
            queryFn: getTvShow
        }
    )

    return { tv, loading }
}