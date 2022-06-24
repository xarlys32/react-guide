import { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const amountInputRef = useRef();

    const onSubmitHandler = (eve) => {
        eve.preventDefault();
        const enteredAmount =  +amountInputRef.current.value;

        if (enteredAmount === 0 || enteredAmount === undefined)
        {
            return;
        }

        props.onAddToCart(enteredAmount);
    }

    return <form className={classes.form} onSubmit={onSubmitHandler}>
        <Input label='Amount' 
            ref= {amountInputRef}
            input={{
                id: 'amount_'+props.id,
                type: 'number',
                min: '1',
                max: '5',
                step:'1',
                default: '1'
            }}/>
        <button>Add</button>
    </form>
}
export default MealItemForm;