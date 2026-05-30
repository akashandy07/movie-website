import { useEffect, useState } from "react";
import { getUpcomingMovies } from "../movies/Movie";

const useUpcomingMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const data = await getUpcomingMovies();
            setMovies(data);
            setLoading(false);
        }

        load();
    }, []);

    return { movies, loading };
};

export default useUpcomingMovies;