import { addToWatchlist } from "../movies/Movie";


export const useAddWatch = () => {
    async function addWatch(movieId) {
        try {
            await addToWatchlist(movieId) 
            alert("Movie added to watchlist!") // ✅ API call — needs try/catch
        } catch (error) {
            console.error("Failed to add to watchlist:", error)
        }
    }

    return { addWatch };
};


