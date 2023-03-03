import { Typography } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'
import { Grid } from '@mui/material'
import CartProductListItemExtended from 'components/CartProductList/CatrProductListItemExtendet'

type Props = {
    productsInCart: {
        [id: number]: number
    }

     }


const CartPage = ({
  productsInCart}: Props) => {
  return (
  <div>
    <Typography 
    variant="h4"
    component="h1"
    sx={{
    marginBottom: '30px',
    }}>
   
     Cart
    </Typography>
    <Grid container spacing={4}>
        <CartProductList
        productsInCart={productsInCart}
        CartItem={CartProductListItemExtended}
        />
        </Grid>
  
    <CartTotal productsInCart={productsInCart}/>

    </div>
     
        )       
   }
export default CartPage