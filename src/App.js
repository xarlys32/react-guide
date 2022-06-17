import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown((prevState) => {
      setCartIsShown(!prevState);
    })
  };
  return (
    <>
      {cartIsShown && <Cart onCloseHandler={showCartHandler}/>}
      <Header onShownCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
