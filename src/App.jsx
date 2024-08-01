import React from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";
import Descp from "./components/Descp/Descp";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <Shop></Shop>
      <Descp></Descp>
      <Footer></Footer>
    </div>
  );
};

export default App;
