import classes from './CartButton.module.css';
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from '../redux-store/cartSlice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItemQuantity = useSelector(state => state.cart.itemQuantity);
  const showCart_handler = () => {
    dispatch(cartActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={showCart_handler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemQuantity}</span>
    </button>
  );
};

export default CartButton;
