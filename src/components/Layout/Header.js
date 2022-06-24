import classes from './Header.module.css'
import meals from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
const Header = (props) => {
    const cartContext = useContext(CartContext);

    const numberOfItems = cartContext.items.reduce((currValue, item) => {
        return currValue + item.amount;
    }, 0);
    const openModal = () => {
        props.onShownCart();
    }
    return(
        <>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton numberItems={numberOfItems} onClick={openModal}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt='myaaa'/>
            </div>
        </>
    )
};

export default Header;