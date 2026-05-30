// import { useEffect, useState } from "react";
// import { getTvWatchProviders } from "../movies/Movie";


// export const useTvProvider = (seriesId) => {
//     const [provider, setProvider] = useState([])

//     useEffect(() => {
//         async function load() {
//             try {
//                 const res = await getTvWatchProviders(seriesId)
//                 console.log("res:", res)
//                 setProvider(res)
//             } catch (err) {
//                 console.log("error:", err)  // ✅ this will show what's failing
//             }
//         }
//         load()
//     }, [seriesId])

//     return { provider }  // ✅ must have a return
// }
