import Badge from '@mui/material/Badge';
import Cart from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <Badge badgeContent={1} color='success'>
      <Cart/>
    </Badge>
  )
}

export default CartWidget;