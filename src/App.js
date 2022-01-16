import "./App.css";
import React from "react";
import NavBar from "./components/Navbar";
import MessageBoard from "./components/MessageBoard";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <MessageBoard></MessageBoard>
    </React.Fragment>
  );
}

export default App;
