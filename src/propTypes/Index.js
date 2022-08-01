import React from 'react'
import { useFetch } from './../CustomHooks/useFetch'
import Product from './Product'
// import defaultImage from '../assets/default-image.jpeg'

const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
  const { products } = useFetch(url)
  return (
    <div>
      <h2>Products</h2>
      {/* <img src={defaultImage} alt="" /> */}
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}

export default Index
