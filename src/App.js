import React from "react";
import Navbar from "./Components/NavBar/NavBar";
import {originals,Horror,Romance, Action} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title = 'Netflix Originals' />
      <RowPost url={Action} title = 'Action' isSmall />
      <RowPost url={Romance} title = 'Romance' isSmall />
    </div>
  );
}

export default App;
