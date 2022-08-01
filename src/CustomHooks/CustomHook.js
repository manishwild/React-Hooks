import React from 'react'
import { useFetch } from './useFetch';

const url = 'https://course-api.com/javascript-store-products'

const CustomHook = () => {
  const {loading,products} = useFetch(url)
  return (
    <div>
      <h2>{loading ? 'Loading...' : 'data'}</h2>
    </div>
  )
}

export default CustomHook
