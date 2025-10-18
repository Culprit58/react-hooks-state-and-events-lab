import React, { useState } from "react";
import ShoppingList from "./ShoppingList"; // ✅ Correct import path

function App() {
  // state to track if dark mode is on or off
  const [isDarkMode, setIsDarkMode] = useState(false);

  // toggles the dark mode state
  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  // determines the class name based on state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h1>Grocery List</h1>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList />
    </div>
  );
}

export default App;
