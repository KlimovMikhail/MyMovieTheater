import React from 'react';

import { Header, Footer } from ".";
import { MainContainer } from "../routs"
import "../assets/style.scss";

export const App = () => {
  return (
    <div className="container">
      <Header></Header>
      <MainContainer></MainContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;