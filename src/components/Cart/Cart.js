import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.cartItem);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => {
          return <CartItem item={{ id: item.id, title: item.title, quantity: item.quantity, total: item.quantity * item.price, price: item.price }} key={item.id} />
        })}
      </ul>
    </Card>
  );
};

export default Cart;
