// import React from "react";
// import { addFavourite, removefavourite } from "../actions";

// export default class MovieCard extends React.Component {
//   handleFavouriteClick = () => {
//     const { movie } = this.props;
//     this.props.dispatch(addFavourite(movie));
//   };
//   unhandleFavouriteClick = () => {
//     const { movie } = this.props;
//     this.props.dispatch(removefavourite(movie));
//   };
//   render() {
//     const { movie, isfavourite } = this.props;
//     return (
//       <div className="movie-card">
//         <div className="left">
//           <img alt="movie-poster" src={movie.Poster} />
//         </div>
//         <div className="right">
//           <div className="title">
//             {movie.Title} ({movie.Year})
//           </div>
//           <div className="plot">
//             {movie.Plot}
//             <br />
//             <b> Director : </b>
//             {movie.Director}
//             <br />
//             <b>Actors :</b> {movie.Actors}
//           </div>
//           <div className="footer">
//             <div className="rating">Rating : {movie.imdbRating}&nbsp;</div>
//             {isfavourite ? (
//               <button
//                 onClick={this.unhandleFavouriteClick}
//                 className="unfavourite-btn"
//               >
//                 Un favourite
//               </button>
//             ) : (
//               <button
//                 onClick={this.handleFavouriteClick}
//                 className="favourite-btn"
//               >
//                 favourite
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
import React, { Component } from "react";
import { addToFavourites, removeFromFavourites } from "../actions";

class MovieCard extends Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addToFavourites(movie));
  };

  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFavourites(movie));
  };

  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-pic" />
        </div>
        <div className="right">
          <div className="title">
            {movie.Title} ({movie.Year})
          </div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
