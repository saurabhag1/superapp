import React, { useEffect, useState } from 'react';
import styles from './Movies.module.css';

const Movies = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',

      headers: {
        'X-RapidAPI-Key': '969a59e04dmshcc724fc41ebb602p1dc96ejsn1465a0e2f896',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    };
    const MovieFetch = async () => {
      await fetch(
        `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre}&year=2022`,
        options
      )
        .then((res) => res.json())
        .then((res) => setMovies(res.results.splice(4, 4)));
    };
    MovieFetch();
  }, [genre]);

  return (
    <>
      <p className={styles.heading }>{genre}</p>
      <div className={styles.Container}>
        {movies.map((movie, index) => {
          return (
            <div key={index} className={styles.movieTitles}>
              <img
                src={movie.primaryImage?.url}
                className={styles.Img}
                alt="Img"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movies;
