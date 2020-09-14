import "./App.css";
import React from "react";
import Taam from "./components/Taam";

/**
 * @returns {ReactComponent} the App component
 */
function App() {
  const taamim = [
    { display: "", name: "zarka" },
    { display: "", name: "atnah" },
    { display: "", name: "chofar_mehoupakh_kadma" },
    { display: "\u05e7\u05b7\u05d3\u05b0\u05de\u05b8\u05d0\u05a8", name: "kadma" },
    { display: "\u05d2\u05b7\u05bc\u05e2\u05b0\u05d9\u05b8\u05bd\u05d0", name: "gaya" },
  ];

  return <div className="App">
    {taamim.map(taam => <Taam key={taam.name} taam={taam} />)}
  </div>;
}

export default App;
