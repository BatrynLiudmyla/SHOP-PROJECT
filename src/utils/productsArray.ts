

 export type Product= {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
    id:1,   
    title: 'iPhone 14 Pro',
    description:"This is iPhone 14 Pro",
    type:"phone",
    capacity:"256",
    price:1200,
    image: '/images/iPhone 1.jpg',
},
{
    id:2, 
    title: 'iPhone 12 Pro',
    description:"This is iPhone 12 Pro",
    type:"phone",
    capacity:"128",
    price:1000,
    image: '/images/iPhone 2.jpg',
},
{
    id:3,  
    title: 'iPhone 11 Pro',
    description:"This is iPhone 11 Pro",
    type:"phone",
    capacity:"512",
    price:1200,
    image: '/images/iPhone 3.jpg',
},
{
    id:4,  
    title: 'iPhone 10 Pro',
    description:"This is iPhone 10 Pro",
    type:"phone",
    capacity:"128",
    price:800,
    image: '/images/iPhone 4.png',
},
{
    id:5,  
    title: 'iPhone 14 Max',
    description:"This is iPhone 14 Max",
    type:"phone",
    capacity:"512",
    price:1500,
    image: '/images/iPhone black.jpg',
},
{
    id:6,  
    title: 'iPhone 8 Pro',
    description:"This is iPhone 8 Pro",
    type:"phone",
    capacity:"128",
    price:500,
    image: '/images/iPhone purple.jpg',
},
]
      
  export const getProductsObject = (array: Product[]) =>
  array.reduce(
    (object, product) => ({
        ...object,
        [product.id]: product,
    }),
    {}
  )




    
    export default productsArray