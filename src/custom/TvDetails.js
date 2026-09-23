// useTvDetails.js
import { useQuery } from '@tanstack/react-query'
import { getTvDetails } from '../movies/Movie'

export const useTvDetails = (seriesId) => {
  const { data: tvData = null, isLoading: loading, error } = useQuery({
    queryKey: ['tvDetails', seriesId],
    queryFn: () => getTvDetails(seriesId),
    enabled: !!seriesId
  })

  return { tvData, loading, error: error?.message }
}