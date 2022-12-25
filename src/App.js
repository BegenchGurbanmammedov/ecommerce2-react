import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
// import Navbar from './components/layouts/Navbar'
// import {signInWithGooglePopup,createUserDocumentAuth} from './utils/firebase.js'
import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product"
import Cart from "./components/Cart"

import Products from "./components/Products";

function App() {
  return (
    <div>
    <Routes>
       <Route path="/" element={<Navbar/>} >
     
        <Route  path="/" element={<Home/>} />
        <Route  path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
       </Route>

    </Routes>
     
        
      
  
    </div>
  );
}

export default App;

// const logGoogleUser=async ()=>{
//    const {user}=await signInWithGooglePopup();
//    const userDocRef = await createUserDocumentAuth(user)
//  }

{
  /*<div className="flex flex-col justify-between h-screen">
            <button onClick={logGoogleUser}>Sign in </button>

      </div>*/
}
//bootrstrap font-awesome
