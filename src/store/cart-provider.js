import CartContext from "./cart-context";

const CartProvider = (props) => {
    const addItemHandler = (item) => {}
    
    const deleteItemHandler = (id) => {}

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler ,
        deleteItem: deleteItemHandler 
    };

    return <>
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    </>
}
export default CartProvider;