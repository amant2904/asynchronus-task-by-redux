import React, { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from "react-redux";
import Notification from './components/UI/Notification';
import { uiActions } from './components/redux-store/ui-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showNotify = useSelector(state => state.ui.notification)
  const cart = useSelector(state => state.cart)
  useEffect(() => {
    if (!isInitial) {
      console.log(111);
      (async () => {
        dispatch(uiActions.showNotification({ msg1: "sending...", msg2: "sending data into cart", bg: "brown" }));
        try {
          let res = await fetch("https://moviesapp-react-1111-default-rtdb.firebaseio.com/items.json", {
            method: 'PUT',
            body: JSON.stringify(cart)
          })
          let data = await res.json();
          console.log(data);
          if (!res.ok) {
            throw new Error("error found")
          }
          dispatch(uiActions.showNotification({ msg1: "success", msg2: "add in cart successfully", bg: "green" }));
          setTimeout(() => {
            dispatch(uiActions.hideNotification())
          }, 1000)
        }
        catch (err) {
          dispatch(uiActions.showNotification({ msg1: "Failed", msg2: "Failed adding item in cart", bg: "red" }));
          console.log(err.message);
          setTimeout(() => {
            dispatch(uiActions.hideNotification())
          }, 1000)
        }
      })()
    }
    isInitial = false;
  }, [cart])

  const showCart = useSelector(state => state.ui.showCart);
  return (
    <React.Fragment>
      {showNotify && <Notification />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
