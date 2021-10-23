
import './App.css';
import Header from './components/Header/Header.js';
import SliderImages from './components/SliderImages';
import Footer from './components/Footer';
import CardSlider from  './components/CardSlider';
import Premiere from './components/Premiere';
import Streaming from './components/Streaming';
// import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
// import SingleMovie from './components/SingleMovie';
import SingleMovieFetch from './components/SingleMovieFetch';
import Registration from './components/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
          <Route exact path="/Movies">
            <AllMoviesFetch/>
          </Route>
          <Route exact path="/Movies/:movid">
            <SingleMovieFetch/>
          </Route>

          <Route exact path="/register">

            <Registration/>
          </Route>
         
          <Route exact path="/">
          <SliderImages/>
          <CardSlider/>
          <Premiere/>
          <Streaming/>
          </Route>
        </Switch>
       <Footer/>
    </div>
    </Router>
  );
}

export default App;
