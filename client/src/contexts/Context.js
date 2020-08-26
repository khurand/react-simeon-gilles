import React, { createContext, Component } from "react";

export const Context = createContext();

class ContextProvider extends Component {
  state = {
    title: "Gilles Simeon",
    logo: "fas fa-heartbeat",
  };
  render() {
    return (
      <Context.Provider value={{ ...this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
