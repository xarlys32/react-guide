import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
    items: [],
    amount : 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateItems = state.items.concat(action.item);
        const updatedAmount = state.amount + action.item.pice * action.item.amount
        return {
            items: updateItems,
            amount : updatedAmount
        };
    }
    return defaultState;
};
const CartProvider = (props) => {
    const [cartState, dispatchAction] = useReducer(cartReducer, defaultState); 

    const addItemHandler = (item) => {
        dispatchAction({
            type: 'ADD',
            item: item
        })
    }
    
    const deleteItemHandler = (id) => {
        dispatchAction({
            type: 'DELETE',
            id: id
        }) 
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.amount,
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