import classes from './MealItemForm.module.css'
import Input from "../../UI/Input"
import { useRef,useState } from 'react';

const MealItemForm = (props) =>{
    const [amountIsValid,setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
           event.preventDefault();
           const enteredAmount = amountInputRef.current.value;
           const enteredamtnum= +enteredAmount;

           if(enteredAmount.trim().length===0 || enteredamtnum<1 || enteredamtnum>5){
               setAmountIsValid(false);
               return
           }

           props.onAddToCart(enteredamtnum);
    }
   return <form onSubmit={submitHandler} className={classes.form}>
       <Input label="Amount"
          ref={amountInputRef}
          input={{
           id:'amount',
           type:'number',
           min:'1',
           max:'5',
           step:'1',
           defaultValue:'1'
       }} />
       <button>+ Add</button>
       {!amountIsValid && <p>Please enter valid amount</p>}
   </form>
};

export default MealItemForm;