import Router from "next/router";

export const advanceDispatch = function advanceDispatch(reducer, currentState) {
  return function dispatch(action) {
    let newState = reducer(currentState, action);
    Router.push({
      pathname: Router.pathname,
      query: { ...newState },
    });
  };
};
