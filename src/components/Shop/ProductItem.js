import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from '../redux-store/cartSlice';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItem);

  const addInCart_handler = (props) => {
    dispatch(cartActions.addToCart({ ...props, quantity: 1 }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <p>{id}</p>
        <div className={classes.actions}>
          <button onClick={() => addInCart_handler(props)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
