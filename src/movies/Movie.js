import tmdb from "../api/tmdb";
import Login from "../components/Login";


// ===================== MOVIES =====================

export async function getPopularMovies() {
    const res = await tmdb.get("/movie/popular");
    return res.data.results;
}

export async function getUpcomingMovies() {
    const res = await tmdb.get("/movie/upcoming");
    return res.data.results;
}

export async function getMovieDetails(id) {
    const res = await tmdb.get(`/movie/${id}`);
    return res.data;
}

export async function getVideos(id) {
    const res = await tmdb.get(`/movie/${id}/videos`);
    return res.data.results;
}


// ===================== TV =====================

export async function getTvShow() {
    const res = await tmdb.get("/trending/tv/day")
    console.log(res);
    return res.data.results
}

export async function getTvShowWeek() {
    const res = await tmdb.get("/trending/tv/week")
    console.log(res);
    return res.data.results
}



// ===================== AUTH =====================

export async function getRequestToken() {
    const res = await tmdb.get("/authentication/token/new");
    return res.data.request_token;
}




export async function createSession(requestToken) {
    const res = await tmdb.post("/authentication/session/new", {
        request_token: requestToken
    });



    return res.data.session_id;
}


// ===================== WATCHLIST =====================

export async function addToWatchlist(movieId) {
    const accountId = localStorage.getItem("account_id");
    const sessionId = localStorage.getItem("session_id");
    console.log("ACCOUNT ID:", accountId);  // ← check
    console.log("SESSION ID:", sessionId);  // ← check
    console.log("MOVIE ID:", movieId);

    const res = await tmdb.post(
        `/account/${accountId}/watchlist`,
        {
            media_type: "movie",
            media_id: movieId,
            watchlist: true
        },
        {
            params: {
                session_id: sessionId
            }
        }
    );
    console.log(res.status);
    console.log(res);


    return res.data;
}


export async function removeFromWatchlist(movieId) {
    const accountId = localStorage.getItem("account_id");
    const sessionId = localStorage.getItem("session_id");

    const res = await tmdb.post(
        `/account/${accountId}/watchlist`,
        {
            media_type: "movie",
            media_id: movieId,
            watchlist: false
        },
        {
            params: {
                session_id: sessionId
            }
        }
    );

    return res.data;
}


export async function getWatchlist() {
    const accountId = localStorage.getItem("account_id");
    const sessionId = localStorage.getItem("session_id");

    const res = await tmdb.get(
        `/account/${accountId}/watchlist/movies`,
        {
            params: {
                session_id: sessionId
            }
        }
    );

    return res.data.results;
}

export async function getRecommendations(id) {
    const res = await tmdb.get(`/movie/${id}/recommendations`)

    return res.data
}


// Movie.js
export async function postRating(movieId, rating, session_id) {
    const res = await tmdb.post(`/movie/${movieId}/rating`,
        { value: Number(rating) },
        {
            params: { session_id }

        }
    )

    console.log("STATUS:", res.status)
    console.log("DATA:", res.data)

    return res.data
}

export async function getTvDetails(seriesId) {
    const res = await tmdb.get(`/tv/${seriesId}`)
    // console.log(res.data);

    return res.data
}

export async function getTvRecommendations(seriesId) {
    const res = await tmdb.get(`/tv/${seriesId}/recommendations`)

    return res.data

}

export const getTvVideos = async (id) => {
    const res = await tmdb.get(`/tv/${id}/videos`)
    return res.data.results
}

export const getRatedMovies = async () => {
    const res = await tmdb.get("/movie/top_rated")
    return res.data.results
}

export const getNowPlayingMovies = async () => {
    const res = await tmdb.get("/movie/now_playing")
    return res.data.results
}

export const getOnTheAir = async () => {
    const res = await tmdb.get("/tv/on_the_air")
    return res.data.results
}
export const getAiringTodays = async () => {
    const res = await tmdb.get("/tv/airing_today")
    return res.data.results
}









