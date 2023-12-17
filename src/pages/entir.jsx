import React, { useState, useEffect } from "react";
import Bannerentir from "../components/category/Bannerentir.jsx";
import "../APP.css";
import { Helmet } from "react-helmet";
import Movie from "../components/category/movie.jsx";
import { resturantlist } from "../constants/constant.js";
import errorimg from "../assets/images/error-icon.png";
import { useNavigate } from "react-router-dom";

const Entir = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [myborder, setmyborder] = useState([]);
  const [error, seterror] = useState(false);
  const navigate = useNavigate();

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
      seterror(false);
      localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
      navigate("/home");
    } else {
      seterror(true);
      console.log("Proceed 3 to the next page");
    }
  };

  return (
    <>
      <div className="container-entir">
        <Helmet>
          <style>
            {
              "body { background-color: black; overflow-y: hidden; overflow-x: hidden; }"
            }
          </style>
        </Helmet>
        <Bannerentir />

        <div className="countainer">
          <div class="item item1">
            <Movie
              name={resturantlist[0].name}
              images={resturantlist[0].images}
              color="#FF5209"
              onMovieSelect={handleMovieSelect}
              border={myborder}
            />
          </div>
          <div class="item item2">
            <Movie
              name={resturantlist[1].name}
              images={resturantlist[1].images}
              color="#D7A4FF"
              onMovieSelect={handleMovieSelect}
              border={myborder}
            />
          </div>
          <div class="item item3">
            <Movie
              name={resturantlist[2].name}
              images={resturantlist[2].images}
              color="rgb(20 135 8)"
              onMovieSelect={handleMovieSelect}
              border={myborder}
            />
          </div>
          <div class="item item4">
            <Movie
              name={resturantlist[3].name}
              images={resturantlist[3].images}
              color="rgb(132, 194, 255)"
              onMovieSelect={handleMovieSelect}
              border={myborder}
            />
          </div>
          <div class="item item5">
            <Movie
              name={resturantlist[4].name}
              images={resturantlist[4].images}
              color="rgb(144, 37, 0)"
              onMovieSelect={handleMovieSelect}
              border={myborder}
            />
          </div>
          <div class="item item6">
            <Movie
              name={resturantlist[5].name}
              images={resturantlist[5].images}
              color="#FF5209"
              onMovieSelect={handleMovieSelect}
              border={myborder}
            />
          </div>
          <div class="item item7">
            <Movie
              name={resturantlist[6].name}
              images={resturantlist[6].images}
              color="rgb(115, 88, 255)"
              onMovieSelect={handleMovieSelect}
              border={myborder}
            />
          </div>
          <div class="item item8">
            <Movie
              name={resturantlist[7].name}
              images={resturantlist[7].images}
              color="rgb(255, 74, 222)"
              onMovieSelect={handleMovieSelect}
              border={myborder}
            />
          </div>
          <div class="item item9">
            <Movie
              name={resturantlist[8].name}
              images={resturantlist[8].images}
              color="rgb(230, 30, 50)"
              onMovieSelect={handleMovieSelect}
              border={myborder}
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
        <button className="nextbtn" onClick={handleNextPageClick}>
          Next Page
        </button>
      </div>
      {selectedMovies.length <= 2 && error ? (
        <div className="errorContainer">
          <img src={errorimg} className="errorimg"></img>
          Minium 3 Catagory Required!{" "}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Entir;
