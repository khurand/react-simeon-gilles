import React, { createContext } from "react";

const globalState = {
  title: "Gilles Simeon",
  logo: "fas fa-heartbeat",
};

// Create context
export const Context = createContext(globalState);

// Provider component
const ContextProvider = ({ children }) => {
  return (
    <Context.Provider value={{ ...globalState }}>{children}</Context.Provider>
  );
};

// export const Context = createContext();
// class ContextProvider extends Component {
//   state = {
//     title: "Gilles Simeon",
//     logo: "fas fa-heartbeat",
//   };
//   render() {
//     return (
//       <Context.Provider value={{ ...this.state }}>
//         {this.props.children}
//       </Context.Provider>
//     );
//   }
// }

export default ContextProvider;
