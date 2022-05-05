import CartIcon from '../Cart/CartIcon.js';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = () => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your cart</span>
            <span  className={classes.badge}>0</span>
        </button>
    )
};

export default HeaderCartButton;