import { getTvVideos } from "../movies/Movie"

export const useTvActionss = () => {

    async function handlePlay(id) {
        const videos = await getTvVideos(id)

        const trailer =
            videos.find(
                (vid) =>
                    vid.site === 'YouTube' &&
                    (vid.type === 'Trailer' || vid.type === 'Teaser')
            ) || videos[0]

        if (trailer) {
            window.open(
                `https://youtu.be/${trailer.key}`,
                "_blank"
            );
        } else {
            alert('No video available')
        }
    }

    return { handlePlay }
}