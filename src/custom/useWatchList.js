import { useEffect, useState } from "react";
import { getWatchlist } from "../movies/Movie";

export const useWatchList = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const data = await getWatchlist();
            setList(data);
            setLoading(false);
        }

        load();
    }, []);

    return { list ,loading};
};