import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Product from '../components/Product/Product'
import { productListAction } from '../action/productAction'

const Home = () => {

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList);

  const { loading, products } = productList;

  useEffect(() => {
    dispatch(productListAction())
  }, [dispatch])

  return (
    <div>
      <h1 className="font-bold py-3 mb-3 border-yellow-500 text-2xl border-b-2">محصولات</h1>
      {loading ? (
        <p className="text-5xl text-center font-bold">درحال دریافت محصولات</p>
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {products.map((item) => {
            return <Product product={item} key={item._id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Home 