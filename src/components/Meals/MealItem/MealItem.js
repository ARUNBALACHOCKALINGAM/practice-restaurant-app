import classes from "./MealItem.module.css"
import { useContext } from "react";
import CartContext from "../../../store/CartContext";
import MealItemForm from "./MealItemForm";

const MealItem = props => {

    const cartCtx = useContext(CartContext);
    const addToCartHandler=(item)=>{
         cartCtx.addItem({
             id:props.id,
             name:props.name,
             amount:item,
             price:props.price

         })
    }
    const price = `$${props.price.toFixed(2)}`;
   return <li className={classes.meal}>
       <div>
           <h3>
              {props.name}
           </h3>
           <div className={classes.description}>
              {props.description}
           </div>
           <div className={classes.price}>
               {price}
           </div>
       </div>
       <div>
           <MealItemForm onAddToCart={addToCartHandler}/>
       </div>
   </li>
}

export default MealItem;