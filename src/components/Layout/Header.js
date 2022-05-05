import classes from './Header.module.css'
import meals from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
const Header = () => {
    return(
        <>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt='myaaa'/>
            </div>
        </>
    )
};

export default Header;