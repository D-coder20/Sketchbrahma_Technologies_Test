import React from "react";
import Menu from "./components/Menu";
import './components/style.css';
import RandomMeal from "./components/RandomMeal";
function App() {
  return (
    <div className="App">
      <RandomMeal />
      <Menu />
    </div>
  );
}

export default App;
