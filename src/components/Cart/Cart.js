import Modal from '../UI/Modal';
import classes from './Cart.module.css'
const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>[]</ul>;

    return (
        <Modal onClose={props.onCloseHandler}>
            {cartItems}
            <div className={classes.total}></div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseHandler}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
            <div></div>
        </Modal>
    )
}
export default Cart;