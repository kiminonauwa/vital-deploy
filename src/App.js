import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { Context } from "./helper/Context";

function App() {
  return (
    <Context>
      <div>
        <Navbar />
        <Main />
        <Card />
        <Footer />
      </div>
    </Context>
  );
}

export default App;
