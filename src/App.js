import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/cart-provider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown((prevState) => {
      setCartIsShown(!prevState);
    })
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseHandler={showCartHandler}/>}
      <Header onShownCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
