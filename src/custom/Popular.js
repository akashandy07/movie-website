import { useEffect, useState } from "react";
import { getPopularMovies } from "../movies/Movie";

const usePopularMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const data = await getPopularMovies();
            setMovies(data);
            setLoading(false);
        }

        load();
    }, []);

    return { movies, loading };
};

export default usePopularMovies;