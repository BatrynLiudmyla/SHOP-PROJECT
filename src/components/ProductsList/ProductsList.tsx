import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'
import productsArray from 'utils/productsArray'

type Props = {
    addProductToCart:(count: number,price: number) => void
}

const ProductsList = ({addProductToCart}: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" component="h2" sx={{
                marginBottom:'40px'
            }}>
                Products List
            </Typography>

            <Grid container spacing={3}>
                {productsArray.map(
                    ({ 
                    id,
                    title, 
                    description,
                    type, 
                    capacity, 
                    price,
                    image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem                                
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
