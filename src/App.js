import './App.css';
import Header from './Header';
import Home from './Home';
import Payment from './Payment'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './Stateprovider';
import { useEffect } from 'react';
import { auth} from './Firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders'
const promise = loadStripe(
  'pk_test_51LZnRMHLr8EOu9nuEd9pCYG7PVBlo7qzDCjznkzBxcoCr70Kms9lGA2rFKppOWHlS7EFwgBCiR2qpRzxy8kW5MI300cthbzOIH'
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
        <Route path="/orders" element={<><Header /><Orders /></>}/>
          <Route path="/login" element={<Login />}/>          
          <Route path="/"
            element={<><Header /><Home /></>} />          
          <Route path="/checkout" element={<><Header /><Checkout/></>}/>
          <Route path="/payment" element={<Elements stripe={promise}><Payment /> </Elements>} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;