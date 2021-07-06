import ArtistCard from "./components/artist-card";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="container">
      <div className="row">
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </div>
    </div>
  );
}

export default App;
