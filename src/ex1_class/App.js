import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {

  // js variables & functions

  render() {
    return (
      <>
        <Header />
        <div className="container">App Content!</div>
        <Footer />
      </>
    );
  }
}

export default App;
