
import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import {action,originals} from  './url'
import './App.css';
import Banner  from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
 return(
  <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title="Netflix Originals"/>
    <RowPost url={action} title="Action" isSmall />
    <RowPost url={action} title="Thriller" isSmall />
  </div>
 )
}

export default App;
