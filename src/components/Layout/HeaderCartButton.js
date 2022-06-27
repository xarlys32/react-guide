import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context.js';
import CartIcon from '../Cart/CartIcon.js';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const [btnHighlated, setBtnHighlated] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx
    const btnClasses= `${classes.button} ${btnHighlated ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return
        } else {
            setBtnHighlated(true);

            const timer = setTimeout(() => {
                setBtnHighlated(false)
            }, 300);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your cart</span>
            <span  className={classes.badge}>{props.numberItems}</span>
        </button>
    )
};

export default HeaderCartButton;