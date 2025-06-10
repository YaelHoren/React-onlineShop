import './Cart.css';
import deliveryGif from '../assets/15309871.gif';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { HomeDelivery, addAmount, deleteProduct, removeAmount, clearCart } from '../Redux/CartSlice';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartReducer.cartList);
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  const handleAddAmount = (product) => {
    dispatch(addAmount(product));
  };
  const handleRemoveAmount = (product) => {
    dispatch(removeAmount(product));
  };
  const handleTotalPrice = () => {
    dispatch(HomeDelivery());
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClearCart = () => {
    dispatch(clearCart());

    setOpen(false);
  }
  return (
    <>
 
      <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="table-header">
              <TableCell className="table-header-cell">Products</TableCell>
              <TableCell align="right" className="table-header-cell">Price</TableCell>
              <TableCell align="right" className="table-header-cell">Amount</TableCell>
              <TableCell align="right" className="table-header-cell">Interim sum</TableCell>
              <TableCell align="right" className="table-header-cell">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartList.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={row.images[0]}
                    alt={row.title}
                    style={{ width: '30px', height: '30px', marginRight: '8px' }}
                  />
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.price}$</TableCell>
                <TableCell align="right">
                  <button onClick={() => handleRemoveAmount(row)}> - </button>
                  {row.amount}
                  <button onClick={() => handleAddAmount(row)}> + </button>
                </TableCell>
                <TableCell align="right">{(row.price * row.amount).toFixed(2)}$</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    <IconButton aria-label="delete" size="large" onClick={() => handleDelete(row.id)}>
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div id='a'>Total Price: {totalPrice.toFixed(2)}$</div>
      </TableContainer>
      <br />
      <div className='form-group'>
        <img src={deliveryGif} alt="Delivery" />
        <FormGroup id='c' >
          <FormControlLabel id='d' control={<Checkbox onChange={handleTotalPrice} />} label="Home delivery" />
        </FormGroup>
      </div>
    
      <React.Fragment>
        <Button id='b' variant="outlined" onClick={handleClickOpen}>
          For payment and ordering
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you want to complete the order?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleClearCart} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
};
export default Cart;












