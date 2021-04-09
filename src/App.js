import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import CharactersList from "./components/CharacterList";
import IndividualCharacter from "./components/IndividualCharacter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Navigation />
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/characters">
              <CharactersList />
            </Route>
            <Route path="/characters/">
              <IndividualCharacter />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
