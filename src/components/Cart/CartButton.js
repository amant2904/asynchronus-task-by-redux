import classes from './CartButton.module.css';
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from '../redux-store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItemQuantity = useSelector(state => state.cart.itemQuantity);
  const showCart_handler = () => {
    dispatch(uiActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={showCart_handler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemQuantity}</span>
    </button>
  );
};

export default CartButton;
