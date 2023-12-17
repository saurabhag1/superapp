import Profile from "../Profile/Profile";
import StyleUserPannel from "./UserPannel.module.css";

const UserPannel = () => {
  const storedData = JSON.parse(localStorage.getItem("userData"));

  // Access the data as needed
  const { name, username, email } = storedData;
  const browse = JSON.parse(localStorage.getItem("selectedMovies"));
  console.log(browse);
  return (
    <>
      <div className={`${StyleUserPannel.pannel}`}>
        <div>
          <Profile />
        </div>
        <div className={`${StyleUserPannel.space1}`}>
          <div>
            <span className={`${StyleUserPannel.nameEmail}`}> {name}</span>
            <br />
            <span className={`${StyleUserPannel.nameEmail}`}> {email}</span>
            <br />
            <span className={`${StyleUserPannel.userName}`}>{username}</span>
          </div>

          <div style={{ overflowY: "scroll", maxHeight: "11vh" }}>
            <Movies category={browse}></Movies>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPannel;

const Movies = ({ category }) => {
  return (
    <div style={{ color: "white", overflowY: "scroll", maxHeight: "11vh" }}>
      {category.map((movie, index) => (
        <div
          key={index}
          style={{
            color: "white",
            borderRadius: "36.947px",
            background: "#9F94FF",
            width: "111px",
            fontSize: "21px",
            textAlign: "center",
            marginBottom: "8px",
          }}>
          {movie.name}
        </div>
      ))}
    </div>
  );
};
