import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { useEffect } from "react";
import { fetchDataAsyncAction } from "../Redux/Thunk";
import loadingIcon from '../assets/Spinner-1s-200px.gif';
import { useNavigate } from "react-router-dom";
const AllProducts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const ArrProducts = useSelector(state => state.productReducer.ArrProducts);
    const loading = useSelector(state => state.productReducer.loading)
    const error = useSelector(state => state.productReducer.error);

    useEffect(() => {
        dispatch(fetchDataAsyncAction());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            navigate('/error')
        }
    }, [error])
    return (
        <>
            {loading ? (
                <img src={loadingIcon} alt="Loading" width="250px" height="250px" />
            ) : (
                <>
                    <h1 style={{ color: ' #58a0c2', textAlign: 'center' }}>All Products:</h1>
                    <div className="row">
                        {ArrProducts.length && (
                            ArrProducts.map((product, index) => (
                                <Product
                                    key={index}
                                    product={product}
                                />
                            ))
                        )}
                    </div>
                </>
            )}
        </>
    )
}
export default AllProducts;
