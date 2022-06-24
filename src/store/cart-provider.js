import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
    items: [],
    amount : 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        
        const updatedAmount = state.amount + action.item.price * action.item.amount;console.log( state.amount, action.item.price, action.item.amount)
        const existingItem = state.items.findIndex(item => item.id === action.item.id);
        let updateItems;
        if (existingItem !== undefined && (existingItem === 0 || existingItem > 0)) {
            let itemToUpdate = state.items[existingItem];
            const updatedItem = {...itemToUpdate, amount: itemToUpdate.amount + action.item.amount};
            updateItems = [...state.items];
            updateItems[existingItem] = updatedItem;
            
        } else {
            updateItems = state.items.concat(action.item);
        }
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