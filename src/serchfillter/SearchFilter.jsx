// import React, { useEffect, useState } from 'react'


// const SearchFilter = ({ searchTerm }) => {
//   let [movie, setMovie] = useState([])

//   useEffect(() => {
//     async function load() {
//       const data = await fetchFromTMDB("/movie/popular")
//       setMovie(data.results)
      
      
//     }
//     load()
//   }, [])

//   // ✅ If no search → show nothing
//   if (!searchTerm) {
//     return null
//   }

//   let filteredMovies = movie.filter((m) =>
//     (m?.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
//     (m?.original_language || "").toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   return (
//     <div>
//       {filteredMovies.length > 0 ? (
//         <ul>
//           {filteredMovies.map((m) => (
//             <li key={m.id}>
//               {m.title} ({m.original_language})
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No movies found.</p>
//       )}
//     </div>
//   )
// }

// export default SearchFilter