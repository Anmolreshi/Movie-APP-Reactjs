// import { StrictMode } from "react";
// import ReactDOM from "react-dom";
// import thunk from "redux-thunk";
// import { applyMiddleware, createStore } from "redux";
// import App from "./components/App";
// import rootreducer from "./reducer";
// // this function is curried form of function logger (obj,next,action)
// // const Logger=function({dispatch,getState}){
// //   return function(next){
// //     return function(action){
// //       console.log('Action Type:',action.type);
// //       next(action);
// //     }
// //   }
// // }

// // modifying middleware uing js concepts
// const logger = ({ dispatch, getState }) => (next) => (action) => {
//   //logger code
//   if (typeof action !== "function") {
//     console.log("Action Type:", action.type);
//   }
//   next(action);
// };

// // thunk function for serach bar when we search using this dispatch is called
// // const thunk=({dispatch,getState})=> (next) => (action) => {

// //   if(typeof action==='function'){
// //   action(dispatch);
// //   return;
// // }
// //   next(action);
// // };
// const store = createStore(rootreducer, applyMiddleware(logger, thunk));
// // console.log(" Store", store);
// //console.log("State", store.getState());
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App store={store} />
//   </StrictMode>,
//   rootElement
// );
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import rootReducer from "./reducers";
import "./index.css";

// const logger = function({ dispatch, getState }) {
//   return function(next) {
//     return function(action) {
//       // my middlware
//       console.log('ACTION', action);
//       next(action);
//     };
//   };
// };

const logger = ({ dispatch, getState }) => (next) => (action) => {
  // my middlware
  console.log("ACTION", action);
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

// const connectedComponent = connect(callback)(App);
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBeSentAsProps = callback(state);

//         return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => {
//               return <ConnectedComponent store={store} />;
//             }}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }

// update store by dispatching actions
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: moviesList
// });
// console.log('state', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
