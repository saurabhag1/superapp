// import React, { useState } from "react";
// import Bannerentir from "../components/Bannerentir.jsx";
// import "../APP.css";
// import { Helmet } from "react-helmet";
// import Movie from "../components/movie.jsx";
// import { resturantlist } from "../constants/constant.js";

// function entir() {
//   return (
//     <>
//       <div className="container-entir">
//         <Helmet>
//           <style>
//             {"body { background-color: black; overflow-x: hidden;  }"}
//           </style>
//         </Helmet>
//         <Bannerentir />
//         <div className="movie-countainer">
//           ss
//           <div class="item item1">
//             <Movie
//               name={resturantlist[0].name}
//               images={resturantlist[0].images}
//               color="#FF5209"
//               onMovieSelect={handleMovieSelect}
//             />
//           </div>
//           <div class="item item2">
//             <Movie
//               name={resturantlist[1].name}
//               images={resturantlist[1].images}
//               color="#D7A4FF"
//             />
//           </div>
//           <div class="item item3">
//             <Movie
//               name={resturantlist[2].name}
//               images={resturantlist[2].images}
//               color="#11B800"
//             />
//           </div>
//           <div class="item item4">
//             <Movie
//               name={resturantlist[3].name}
//               images={resturantlist[3].images}
//               color="#84C2FF"
//             />
//           </div>
//           <div class="item item5">
//             <Movie
//               name={resturantlist[4].name}
//               images={resturantlist[4].images}
//               color="#902500"
//             />
//           </div>
//           <div class="item item6">
//             <Movie
//               name={resturantlist[5].name}
//               images={resturantlist[5].images}
//               color="#7358FF"
//             />
//           </div>
//           <div class="item item7">
//             <Movie
//               name={resturantlist[6].name}
//               images={resturantlist[6].images}
//               color="#FF4ADE"
//             />
//           </div>
//           <div class="item item8">
//             <Movie
//               name={resturantlist[7].name}
//               images={resturantlist[7].images}
//               color="#E61E32"
//             />
//           </div>
//           <div class="item item9">
//             <Movie
//               name={resturantlist[8].name}
//               images={resturantlist[8].images}
//               color="#6CD061  "
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default entir;
import React, { useState, useEffect } from "react";
import Bannerentir from "../components/Bannerentir.jsx";
import "../APP.css";
import { Helmet } from "react-helmet";
import Movie from "../components/movie.jsx";
import { resturantlist } from "../constants/constant.js";

const Entir = () => {
  // const [selectedMovies, setSelectedMovies] = useState([]);

  // const handleMovieSelect = (movieName) => {
  //   setSelectedMovies((prevSelectedMovies) => {
  //     if (prevSelectedMovies.includes(movieName)) {
  //       return prevSelectedMovies.filter((name) => name !== movieName);
  //     } else {
  //       return [...prevSelectedMovies, movieName];
  //     }
  //   });
  // };
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleMovieSelect = (movie) => {
    const updatedSelectedMovies = [...selectedMovies];
    const index = updatedSelectedMovies.findIndex(
      (selectedMovie) => selectedMovie.name === movie.name
    );

    if (index !== -1) {
      updatedSelectedMovies.splice(index, 1); // Remove the movie if already selected
    } else {
      updatedSelectedMovies.push(movie); // Add the movie if not selected
    }

    setSelectedMovies(updatedSelectedMovies.slice(-9)); // Keep only the last 9 selected movies
  };

  useEffect(() => {
    // Store selected movies in local storage
    localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
  }, [selectedMovies]);

  const handleNextPageClick = () => {
    if (selectedMovies.length >= 3) {
      // Proceed to the next page logic here
      console.log("Proceed to the next page");
    } else {
      alert("Please select at least 3 movies.");
    }
  };

  return (
    <>
      <div className="container-entir">
        <Helmet>
          <style>
            {"body { background-color: black; overflow-x: hidden; }"}
          </style>
        </Helmet>
        <Bannerentir />
        {/* <div className="movie-container">
          {resturantlist.map((movie, index) => (
            <div key={index} className="item">
              <Movie
                name={movie.name}
                images={movie.images}
                color={movie.color}
                onMovieSelect={handleMovieSelect}
              />
            </div>
          ))}
        </div> */}
        <div className="countainer">
          <div class="item item1">
            <Movie
              name={resturantlist[0].name}
              images={resturantlist[0].images}
              color="#FF5209"
              isSelectedInSmallBox={selectedMovies.some(
                (selectedMovie) => selectedMovie.name === movie.name
              )}
              onMovieSelect={handleMovieSelect}
            />
          </div>
          <div class="item item2">
            <Movie
              name={resturantlist[1].name}
              images={resturantlist[1].images}
              color="#D7A4FF"
              isSelectedInSmallBox={selectedMovies.some(
                (selectedMovie) => selectedMovie.name === movie.name
              )}
              onMovieSelect={handleMovieSelect}
            />
          </div>
          <div class="item item3">
            <Movie
              name={resturantlist[2].name}
              images={resturantlist[2].images}
              color="#FF5209"
              isSelectedInSmallBox={selectedMovies.some(
                (selectedMovie) => selectedMovie.name === movie.name
              )}
              onMovieSelect={handleMovieSelect}
            />
          </div>
          <div class="item item4">
            <Movie
              name={resturantlist[3].name}
              images={resturantlist[3].images}
              color="#FF5209"
              isSelectedInSmallBox={selectedMovies.some(
                (selectedMovie) => selectedMovie.name === movie.name
              )}
              onMovieSelect={handleMovieSelect}
            />
          </div>
          <div class="item item5">
            <Movie
              name={resturantlist[4].name}
              images={resturantlist[4].images}
              color="#FF5209"
              isSelectedInSmallBox={selectedMovies.some(
                (selectedMovie) => selectedMovie.name === movie.name
              )}
              onMovieSelect={handleMovieSelect}
            />
          </div>
          <div class="item item6">
            <Movie
              name={resturantlist[5].name}
              images={resturantlist[5].images}
              color="#FF5209"
              isSelectedInSmallBox={selectedMovies.some(
                (selectedMovie) => selectedMovie.name === movie.name
              )}
              onMovieSelect={handleMovieSelect}
            />
          </div>
          <div class="item item7">
            <Movie
              name={resturantlist[6].name}
              images={resturantlist[6].images}
              color="#FF5209"
              isSelectedInSmallBox={selectedMovies.some(
                (selectedMovie) => selectedMovie.name === movie.name
              )}
              onMovieSelect={handleMovieSelect}
            />
          </div>
          <div class="item item8">
            <Movie
              name={resturantlist[7].name}
              images={resturantlist[7].images}
              color="#FF5209"
              isSelectedInSmallBox={selectedMovies.some(
                (selectedMovie) => selectedMovie.name === movie.name
              )}
              onMovieSelect={handleMovieSelect}
            />
          </div>
          <div class="item item9">
            <Movie
              name={resturantlist[8].name}
              images={resturantlist[8].images}
              color="#FF5209"
              isSelectedInSmallBox={selectedMovies.some(
                (selectedMovie) => selectedMovie.name === movie.name
              )}
              onMovieSelect={handleMovieSelect}
            />
          </div>
        </div>
        <div className="smallBoxesContainer">
          {selectedMovies.map((selectedMovie, index) => (
            <div key={index} className="smallBox">
              <span>{selectedMovie.name}</span>
              <button onClick={() => handleMovieSelect(selectedMovie)}>
                X
              </button>
            </div>
          ))}
        </div>
        <button onClick={handleNextPageClick}>Next Page</button>
      </div>
    </>
  );
};

export default Entir;
