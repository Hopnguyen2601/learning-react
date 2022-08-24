import React from 'react';
import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

import './styles.scss';

CartItem.propTypes = {};

function CartItem({ item }) {
  const handleRemove = () => {};

  return (
    <Card classes={{ root: 'cart-item' }}>
      <CardMedia
        component="img"
        image={item.image}
        classes={{ root: 'cart-item__img', media: 'cart-item__media' }}
        alt="Live from space album"
      />
      <Typography component="span" variant="h5">
        {item.name}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton aria-label="previous">-</IconButton>
        <Typography variant="span" component="span">
          {item.quantity}
        </Typography>
        <IconButton aria-label="previous">+</IconButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <Button onClick={handleRemove}>
          <ClearIcon />
        </Button>
      </Box>
    </Card>
  );
}

export default CartItem;
