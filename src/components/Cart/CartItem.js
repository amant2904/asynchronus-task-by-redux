import classes from './CartItem.module.css';
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from '../redux-store/cartSlice';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const cartItems = useSelector(state => state.cart.cartItem);
  const dispatch = useDispatch();

  const increaseQuantity_handler = (props) => {
    dispatch(cartActions.addToCart(props));
  }

  const decreaseQuantity_handler = (props) => {
    dispatch(cartActions.removeFromCart(props));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <p>{id}</p>
        <div className={classes.actions}>
          <button onClick={() => decreaseQuantity_handler(props.item)}>-</button>
          <button onClick={() => increaseQuantity_handler(props.item)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
