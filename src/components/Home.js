import wallpaper from "../images/wallpaper.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="welcome">
      <h3 className="welcome-message">Welcome to the Rick and Morty App</h3>
      <img
        className="welcome-img hidden-small"
        src={wallpaper}
        alt="rick and morty riding in a car"
      />
      <h5 className="credits">
        Developed by Rikki during the Neue Fische Web Dev Bootcamp
      </h5>
    </div>
  );
}
