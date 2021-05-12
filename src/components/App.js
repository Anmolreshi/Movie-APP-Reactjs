// import React from "react";
// import { data } from "./data";
// import Navbar from "./Navbar";
// import MovieCard from "./MovieCard";
// import "../styles.css";
// import { addMovies, setfavourite } from "../actions";

// export default class App extends React.Component {
//   componentDidMount() {
//     const { store } = this.props;
//     store.subscribe(() => {
//       // console.log("Updated");
//       this.forceUpdate();
//     });
//     //dispatch action
//     // store.dispatch({
//     //   type: "ADD_MOVIE",
//     //   movies: data
//     // });
//     store.dispatch(addMovies(data));
//     console.log("State =", store.getState());
//   }
//   ismovieFavourite = (movie) => {
//     const { movies } = this.props.store.getState();
//     const index = movies.favourites.indexOf(movie);
//     if (index !== -1) {
//       //found the movie
//       return true;
//     }
//     return false;
//   };
//   onchangetab = (val) => {
//     this.props.store.dispatch(setfavourite(val));
//   };
//   render() {
//     const { movies, search } = this.props.store.getState();
//     const { list, favourites, showfavourite } = movies;
//     console.log("Movie List", list, "FAVOURITES", favourites);
//     const displaymovies = showfavourite ? favourites : list;
//     return (
//       <div className="App">
//         <Navbar dispatch={this.props.store.dispatch} search={search} />
//         <div className="main">
//           <div className="tabs">
//             <div
//               className={`tab ${showfavourite ? "" : "active-tabs"}`}
//               onClick={() => this.onchangetab(false)}
//             >
//               Movies
//             </div>
//             <div
//               className={`tab ${showfavourite ? "active-tabs" : ""}`}
//               onClick={() => this.onchangetab(true)}
//             >
//               Favourites
//             </div>
//           </div>
//           <div className="list">
//             {displaymovies.map((movie, index) => (
//               <MovieCard
//                 key={index}
//                 movie={movie}
//                 index={index}
//                 isfavourite={this.ismovieFavourite(movie)}
//                 dispatch={this.props.store.dispatch}
//               />
//             ))}
//           </div>
//           {displaymovies.length === 0 ? (
//             <div className="no-movies">No Movies !</div>
//           ) : null}
//         </div>
//       </div>
//     );
//   }
// }
import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";
import { data as moviesList } from "../data";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(moviesList));
  }

  isMovieInFavourites = (movie) => {
    const { movies } = this.props;

    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }

    return false;
  };

  changeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  };
  render() {
    const { movies, search } = this.props; // will return { movies: {}, search: []}
    console.log("movies", movies);
    const { list, showFavourites = [], favourites = [] } = movies;
    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search} dispatch={this.props.dispatch} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.changeTab(false)}
              style={{ fontWeight: "bold" }}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.changeTab(true)}
              style={{ fontWeight: "bold" }}
            >
              Favourites
            </div>
          </div>

          <div id="list">
            {displayMovies.map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.imdbID}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieInFavourites(movie)}
              />
            ))}
            {displayMovies.length === 0 ? (
              <div className="no-movies">No movies to display! </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function callback(state) {
  return {
    movies: state.movies,
    search: state.movies
  };
}
const connectedComponent = connect(callback)(App);
export default connectedComponent;
