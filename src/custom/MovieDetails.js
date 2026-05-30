import { useEffect, useState } from "react";
import { getMovieDetails } from "../movies/Movie";

export const useMovieDetails = (id) => {
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function load() {
            const data = await getMovieDetails(id);
            setDetails(data);
            setLoading(false);
        }
        load();
    }, [id]);

    return { details, loading };
}

