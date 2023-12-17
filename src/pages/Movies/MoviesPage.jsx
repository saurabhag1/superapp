import React from "react";

import Movies from "../../components/Movies/Movies";
import { useNavigate } from "react-router-dom";
import user from "../../assets/images/HomePageBack.png";

const MoviesPage = () => {
  const MoviesData = JSON.parse(localStorage.getItem("selectedMovies"));

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  const Img = {
    position: "absolute",
    right: "30px",
    top: "20px",
    cursor: "pointer",
  };

  const head = {
    color: "#72DB73",
    // fontFamily: { superText },
    fontSize: "47.333px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "139.688%",
    margin: "0",
    marginLeft: "20px",
  };
  const subhead = {
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: "30.424px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "139.688%",
    letterSpacing: "0.608px",
    marginLeft: "40px",
  };
  return (
    <>
      <img
        style={Img}
        height="70px"
        src={user}
        alt="user"
        onClick={handleClick}
      />
      <div
        style={{
          background: "black",
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
        }}>
        <h3 style={head}>Super app</h3>
        <p style={subhead}>Entertainment according to your choice</p>
        {MoviesData.map((movie, index) => (
          <Movies key={index} genre={movie.name} />
        ))}
      </div>
    </>
  );
};

export default MoviesPage;
