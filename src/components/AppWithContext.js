// React app with Redux (Bare Minimum Example)
import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector, useDispatch } from "react-redux";

// React app with Context API (Bare Minimum Example)
const ReactContextVar = React.createContext();

// Step 1: Create a Context Provider component
const ContextProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);

  return (
    <ReactContextVar.Provider value={{ count, setCount }}>
      {children}
    </ReactContextVar.Provider>
  );
};

// Step 2: Create a simple Counter component
const CounterWithContext = () => {
  const { count, setCount } = React.useContext(ReactContextVar);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

// Step 3: Wrap the app in the Context Provider
const AppWithContext = () => {
    return (
        <>
            <h3> AppWithContext </h3>
            <br/>
            <ContextProvider>
                <CounterWithContext />
            </ContextProvider>
        </>        
    );
}

export default AppWithContext;