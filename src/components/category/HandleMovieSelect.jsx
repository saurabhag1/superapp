const [selectedMovies, setSelectedMovies] = useState([]);
export const HandleMovieSelect = (movie) => {
  const updatedSelectedMovies = [...selectedMovies];
  const index = updatedSelectedMovies.findIndex(
    (selectedMovie) => selectedMovie.name === movie.name
  );

  if (index !== -1) {
    updatedSelectedMovies.splice(index, 1); // Remove the movie if already selected
    setmyborder("blue");
  } else {
    updatedSelectedMovies.push(movie); // Add the movie if not selected
    setmyborder("white");
  }

  setSelectedMovies(updatedSelectedMovies.slice(-9)); // Keep only the last 9 selected movies
};
