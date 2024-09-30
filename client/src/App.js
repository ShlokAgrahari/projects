
import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbar/Newnav';
import Maincomponent from './components/Home/Maincomponent';
import Footer from './components/footer/Footer';
import Signin from './components/signup_signin/Signin';
import Signup from './components/signup_signin/Signup';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
       <Navbaar/>
       <Newnav/>
       <Routes>
           <Route path='/' element={<Maincomponent/>}/>
           <Route path='/login' element={<Signin/>}/>
           <Route path='/register' element={<Signup/>}/>
           <Route path='/getproductsone/:id' element={<Cart/>}/>
           <Route path='/buynow' element={<Buynow/>}/>
       </Routes>
       <Footer/>
    </>
  );
}

export default App;
