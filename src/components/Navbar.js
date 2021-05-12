// import React from "react";
// //import { data } from "./data";
// import { addMovieToList, handleMovieSearch } from "../actions";

// export default class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchText: ""
//     };
//   }
//   handleAddToMovies = (movie) => {
//     this.props.dispatch(addMovieToList(movie));
//     this.setState({
//       showsearchresults: false
//     });
//   };
//   handleSearch = () => {
//     const { searchText } = this.state;
//     this.props.dispatch(handleMovieSearch(searchText));
//   };
//   handlechange = (e) => {
//     this.setState({
//       searchText: e.target.value
//     });
//   };
//   render() {
//     const { result, showsearchresults } = this.props.search;
//     return (
//       <div className="App">
//         <div className="nav">
//           <div className="search-container">
//             <input onChange={this.hanlechange} />
//             <button onClick={this.handleSearch} id="search-btn">
//               Search{" "}
//             </button>
//             {showsearchresults && (
//               <div className="search-results">
//                 <div className="search-result">
//                   <img src={result.Poster} alt="search-pic" />
//                   <div className="movie-info">
//                     <span>{result.Title}</span>
//                     <button onClick={() => this.handleAddToMovies(result)}>
//                       ADD TO MOVIES
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
import React, { Component } from "react";
//import { connect } from "react-redux";
import { addMovieToList, handleMovieSearch } from "../actions";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }
  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
  };

  handleSearchClick = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleSearchChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  };

  render() {
    const { showSearchResults, results: movie } = this.props.search;
    return (
      <div className="nav">
        <div
          style={{
            transform: "translateX(-100px)",
            fontWeight: "bold",
            color: "white",
            fontSize: "25px",
            backgroundColor: "red",
            padding: "7px",
            borderRadius: "5px"
          }}
        >
          {" "}
          Movie APP
        </div>
        <div className="search-container">
          <input
            placeholder="Search Movie"
            onChange={this.handleSearchChange}
          />
          <button id="search-btn" onClick={this.handleSearchClick}>
            Search
          </button>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={() => this.handleAddToMovies(movie)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
