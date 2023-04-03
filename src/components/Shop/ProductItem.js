import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from '../redux-store/cartSlice';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItem);

  const addInCart_handler = (props) => {
    // console.log(props);
    const index = cartItems.findIndex((item) => {
      return item.id === props.id;
    })
    if (index === -1) {
      dispatch(cartActions.addInCart({ ...props, quantity: 1 }))
    }
    else {
      let newList = [];
      for (let i in cartItems) {
        let obj = { ...cartItems[i] };
        newList.push(obj);
      }
      newList[index].quantity += 1;
      dispatch(cartActions.updateInCart(newList));
    }
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
