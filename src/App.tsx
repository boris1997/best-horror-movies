import { Route, Switch } from "react-router-dom";
import MoviePage from "templates/MoviePage/MoviePage";
import MoviesContainer from "templates/Movies/MoviesContainer";
import "./App.css";
import "./styles/style.module.css";

function App() {
  return (
    <div className="App">
      <div className="">
        <Switch>
          <Route exact path="/:movie" component={MoviePage} />
          <Route path="/" component={MoviesContainer} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
// render = {(props) => { <Products component={Products} /> }}
