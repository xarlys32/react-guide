import DUMMY_MEALS from './dummy-meals'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.description} price={meal.price} description={meal.description}/>)}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;