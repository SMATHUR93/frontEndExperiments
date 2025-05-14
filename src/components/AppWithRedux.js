// React app with Redux (Bare Minimum Example)
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

// Step 1: Define the Redux reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// Step 2: Create the Redux store
const store = createStore(counterReducer);

// Step 3: Create a simple Counter component
const CounterWithRedux = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

// Step 4: Wrap the app in the Redux Provider
const AppWithRedux = () => {
  return (
    <>
      <h3> AppWithRedux </h3>
      <br/>
      <Provider store={store}>
        <CounterWithRedux />
      </Provider>
    </>
  );
}

export default AppWithRedux;