import "./App.css";
import React from "react";
import Taam from "./components/Taam";

/**
 * @returns {ReactComponent} the App component
 */
function App() {
  const taamim = [
    { display: "\u05d6\u05b7\u05e8\u05b0\u05e7\u05b8\u0598\u05d0", name: "zarka" },
    { display: "\u05de\u05b7\u05e7\u05b7\u05e3\u05be", name: "makaf" },
    { display: "\u05de\u05b7\u05d0\u05b7\u05e8\u05b4\u05a5\u05d9\u05da\u05b0 \u05d8\u05b7\u05e8\u05b0\u05d7\u0596\u05b8\u05d0 \u05d0\u05b7\u05ea\u05b0\u05e0\u05b8\u0591\u05d7", name: "atnah" },
    { display: "\u05e9\u05c1\u05d5\u05b9\u05e4\u05b8\u05e8\u0020\u05de\u05b0\u05d4\u05d5\u05bc\u05e4\u05bc\u05b7\u05a4\u05da\u05b0\u0020\u05e7\u05b7\u05d3\u05b0\u05de\u05b8\u05d0\u0599 \u05d6\u05b8\u05e7\u05b5\u05e3 \u05e7\u05b8\u05d8\u0594\u05d5\u05b9\u05df", name: "chofar_mehoupakh_kadma" },
    { display: "\u05e7\u05b7\u05d3\u05b0\u05de\u05b8\u05d0\u05a8", name: "kadma" },
    { display: "\u05d2\u05b7\u05bc\u05e2\u05b0\u05d9\u05b8\u05bd\u05d0", name: "gaya" },
    { display: "\u05d3\u05bc\u05b7\u05e8\u05b0\u05d2\u05b8\u05bc\u05a7\u05d0 \u05ea\u05bc\u05b0\u05d1\u05b4\u059b\u05d9\u05e8", name: "darga_tevir"},
    { display: "\u05d6\u05b8\u05e7\u05b5\u05e3 \u05e7\u05b8\u05d8\u0594\u05d5\u05b9\u05df", name: "zakef_katon" },
  ];

  return <div className="App">
    {taamim.map(taam => <Taam key={taam.name} taam={taam} />)}
  </div>;
}

export default App;
