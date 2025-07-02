import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
    const { products } = useAppContext();
    // what is useAppContext and products here?
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
        {/* ye nicche jo bhi likha hai wo kya hai filter kya hai map kya hai aur slice kya hai */}
        {/* how inStock works  */}
        {products.filter((product)=> product.inStock).slice(0,5).map((product, index)=>(
            <ProductCard key={index} product={product}/>
        ))}
        
      </div>
    </div>
  )
}

export default BestSeller
