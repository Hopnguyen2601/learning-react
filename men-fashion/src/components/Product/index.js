import React from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import ButtonText from '../common/Button';

import './styles.scss';
import { addToCart } from '../../redux/Shopping/shopping-actions';

Product.propTypes = {};

function Product({ product }) {
  // Learn more
  new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(product.price);

  const dispatch = useDispatch();

  // 100.000.000

  // useDispatch, useSelector
  // connect(mapStateToProps, mapDispatchToProps)

  // Call to reducer
  const handleAddCart = (productId) => {
    console.log('Hello', productId);
    dispatch(addToCart(productId));
  };

  return (
    <Card classes={{ root: 'card-product' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="men fashion"
        />
      </CardActionArea>
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          classes={{ body1: 'card-product__name' }}
        >
          {product.name}
        </Typography>
        <Typography variant="body1" classes={{ body1: 'card-product__price' }}>
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(product.price)}
        </Typography>
        <Typography variant="body2" color="textPrimary">
          Quantity: {product.quantity}
        </Typography>
      </CardContent>
      <CardActions classes={{ root: 'card-product__action' }}>
        {/* <ButtonText
          onClick={() => handleAddCart(product.id)}
          size="small"
          text="Add to cart"
        /> */}
        <button onClick={() => handleAddCart(product.id)}>Add to cart</button>
      </CardActions>
    </Card>
  );
}

export default Product;
