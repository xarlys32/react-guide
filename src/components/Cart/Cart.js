import classes from './Cart.module.css'
const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>[]</ul>;
    return (
        <div>
            {cartItems}
            <div className={classes.total}></div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} value='Close'/>
                <button className={classes.button} value='Order'/>
            </div>
            <div></div>
        </div>
    )
}
export default Cart;