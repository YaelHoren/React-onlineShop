import { useDispatch } from 'react-redux';
import './Product.css'
import { addToCart } from '../Redux/CartSlice'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Product = ({ product }) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(product));
    }

    return (
        <div className="col-md-3 mb-4">
            <div className="card bg-light shadow-sm h-100">
                <img
                    src={product.images[0]}
                    className="card-img-top img-small"
                    alt={product.title}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                        <strong>Price:</strong> {product.price}$
                    </p>
                    <Stack direction="row" spacing={1} className="centered">
                        <IconButton color="primary" aria-label="add to shopping cart" onClick={addToCartHandler}>
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export default Product;



