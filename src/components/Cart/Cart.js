import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartItem from './CartItem';
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const onAddItemHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const onRemoveItemHandler = (id) => {
        cartCtx.deletemItem(id);
    };
    return (
        <Modal onClose={props.onCloseHandler}>
            <ul className={classes['cart-items']}>
            {cartCtx.items.map(item => {
                return <CartItem key={item.id} id={item.id} name={item.name} price={item.price} amount={item.amount} onAdd={onAddItemHandler.bind(null, item)} onRemove={onRemoveItemHandler.bind(null, item.id)}/>
            })}
            </ul>
            <div className={classes.total}>Total Amount: ${cartCtx.totalAmount}</div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseHandler}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
            <div></div>
        </Modal>
    )
}
export default Cart;