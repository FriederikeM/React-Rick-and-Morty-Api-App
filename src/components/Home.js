import wallpaper from "../images/wallpaper.png";

export default function Home() {
  return (
    <div className="welcome">
      <h3>Welcome to the Rick and Morty App</h3>
      <img src={wallpaper} alt="rick and morty riding in a car" width="100%" />
      <h5>Developedby Rikki during the Neue Fische Web Dev Bootcamp</h5>
    </div>
  );
}
