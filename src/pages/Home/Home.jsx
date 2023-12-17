import StyleHome from "./Home.module.css";
import UserPannel from "../../components/Home/UserPannel/UserPannel";
import News from "../../components/Home/News/News";
import Notes from "../../components/Home/Notes/Notes";
import Weather from "../../components/Home/Weather/Weather";
import Timer from "../../components/Home/Timer/Timer";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const navigate = useNavigate();

  const handleBrowse = () => {
    navigate("/movies");
  };

  return (
    <>
      <div className={`${StyleHome.container}`}>
        <Helmet>
          <style>
            {
              "body { background-color: black; overflow-y: hidden; overflow-x: hidden; }"
            }
          </style>
        </Helmet>
        <div className={`${StyleHome.containerFlex}`}>
          <div>
            <UserPannel />
            <br />
            <Weather />
          </div>
          <div>
            <Notes className={`${StyleHome.notes}`} />
          </div>
        </div>
        <div className={`${StyleHome.news}`}>
          <News />
        </div>
      </div>
      <div className={`${StyleHome.timesPosition}`}>
        <Timer />
      </div>
      <button className={`${StyleHome.browse}`} onClick={handleBrowse}>
        Browse
      </button>
    </>
  );
};

export default Home;
