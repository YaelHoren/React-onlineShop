import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './Components/AllProducts';
import Cart from './Components/Cart';
import About from './Components/About';
import HomePage from './Components/HomePage';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';

const CartBadge = styled(Badge)`
  & .MuiBadge-badge {
    top: -12px;
    right: -6px;
  }
`;
function App() {
  const numOfProducts = useSelector(state => state.cartReducer.numOfProducts);
  return (
    <>
      <BrowserRouter>
        <div id='navDiv'>
          <nav>
            <NavLink to="/" activeclassname="active">Home</NavLink>
            <NavLink to="/about" activeclassname="active">About</NavLink>
            <NavLink to="/products" activeclassname="active">Products</NavLink>
            <NavLink to="/cart" activeclassname="active">
              <IconButton style={{ background: "white" }}>
                <ShoppingCartIcon fontSize="medium" />
                <CartBadge badgeContent={numOfProducts > 0 ? numOfProducts : "0"} color="primary" overlap="circular" />
              </IconButton>
            </NavLink>
          </nav>
        </div>
        <div className="container">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<AllProducts />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;




