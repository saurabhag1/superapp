import React, { useState } from "react";
import style from "./Movie.module.css";

const Movie = ({
  name,
  images,
  color,
  isSelectedInSmallBox,
  onMovieSelect,
}) => {
  const [isSelected, setIsSelected] = useState(isSelectedInSmallBox);

  const toggleSelection = () => {
    setIsSelected((prevSelected) => !prevSelected);
    onMovieSelect({ name, images, color, isSelected: !isSelected });
  };

  const stylee = {
    backgroundColor: color,
    borderColor: isSelected ? "white" : color,
  };

  return (
    <div className={style.movieContainer}>
      <div
        className={`${style.box} ${isSelected ? style.selected : ""}`}
        style={stylee}
        onClick={toggleSelection}>
        <img src={images} className={style.img1} alt="catagory"></img>
        <h2 className={style.name}>{name}</h2>
      </div>
    </div>
  );
};

export default Movie;
