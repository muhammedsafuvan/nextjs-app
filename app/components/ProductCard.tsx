import React from 'react'
import AddToCart from './AddToCart';
import styles from './ProductCard.module.css'


const ProductCard = () => {
  return (
    <div className='p-3 mx-5 bg-sky-800 text-white text-xl hover:bg-sky-900'>
      <AddToCart />
    </div>
  )
}

export default ProductCard