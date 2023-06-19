import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";

function App() {
  const [isDarkMode,setIsDarkMode]=useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App "+(isDarkMode? "dark":"light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList />
    </div>
  );
}

export default App;

  //App
  //  |_Header
  //  |_ShoppingList
  //      |_ItemForm
  //      |_Filter
  //      |_Item
