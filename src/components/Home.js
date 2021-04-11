import "./Home.css";

export default function Home() {
  return (
    <div className="welcome">
      <h1 className="welcome-message">
        <span className="start-heading">Welcome </span>
        <span className="rest-heading">to the Rick and Morty App</span>
      </h1>
      <h5 className="credits">
        Developed by Rikki during the Neue Fische Web Dev Bootcamp
      </h5>
    </div>
  );
}
