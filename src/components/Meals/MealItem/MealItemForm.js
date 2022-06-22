import { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const onSubmitHandler = (eve) => {
    eve.preventDefault();
}

const MealItemForm = (props) => {
    const amountInputRef = useRef();

    return <form className={classes.form} onSubmit={onSubmitHandler}>
        <Input label='Amount' 
            input={{
                id: 'amount_'+props.id,
                type: 'number',
                min: '1',
                max: '5',
                step:'1',
                default: '1',
                ref: {amountInputRef}
            }}/>
        <button>Add</button>
    </form>
}
export default MealItemForm;