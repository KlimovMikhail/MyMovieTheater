import React from 'react';

import { Header, Footer } from "../components";
// import { Main } from "./Main";
import { MainContainer } from "../routs"
import '../style/App.css';
import "../assets/style.scss";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <MainContainer></MainContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
