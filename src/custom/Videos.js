import { getVideos } from "../movies/Movie";
export const useMovieActions = () => {

    async function handlePlay(id) {
        const videos = await getVideos(id);

        const trailer =
            videos.find(
                (vid) =>
                    vid.site === "YouTube" &&
                    (vid.type === "Trailer" || vid.type === "Teaser")
            ) || videos[0];

        if (trailer) {
            window.open(
                `https://www.youtube.com/watch?v=${trailer.key}`,
                "_blank"
            );
        } else {
            alert("No video available");
        }
    };

    return { handlePlay };
};
