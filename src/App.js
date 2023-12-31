import logo from './logo.svg';
import './App.css';
import Header from "./component/Header"
import {Link,Route, Routes} from "react-router-dom"
import Photos from './pages/Photos';
import Cart from "./pages/Cart"



function App() {
  return (
    <div className="App">
      <Header />

      <Routes>

    <Route  exact path="/" element={<Photos />}  /> 
    <Route path= "/cart" element ={<Cart />} />

    </Routes>
    </div>
  );
}

export default App;
