import classes from './Header.module.css'
import meals from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    const openModal = () => {
        props.onShownCart();
    }
    return(
        <>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton onClick={openModal}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt='myaaa'/>
            </div>
        </>
    )
};

export default Header;