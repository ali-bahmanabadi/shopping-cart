import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'

import { productDetailAction } from '../action/productAction'

const Product = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const productDetail = useSelector((state) => state.productDetail)
  const { loading, product } = productDetail

  useEffect(() => {
    dispatch(productDetailAction(id))
  }, [dispatch, id])

  const navigate = useNavigate()
  const addToCartHandler = () => {
    navigate(`/cart/${id}`)
  }

  return (
    <div className="container mx-auto py-7">
      <Link to="/" className="flex flex-row-reverse">
        <span className="p-3 border shadow rounded hover:shadow-md transition">
          بازگشت به صفحه اصلی
        </span>
      </Link>
      {loading ? (
        <p>در حال دریافت محصول</p>
      ) : (
        <div className="grid grid-cols-2 gap-20 pt-5">
          <div>
            <img
              src={product.image}
              alt=""
              className="w-full h-80 object-cover border"
            />
          </div>
          <div>
            <p className="text-3xl font-bold border-b mb-3 text-gray-800 pb-5">
              {product.name}
            </p>
            <p>{product.description}</p>
            <p className="text-red-800 text-left font-bold text-3xl">
              {`${product.price} تومان`}
            </p>
            <button
              onClick={addToCartHandler}
              className="p-2 border-2 w-full my-10 bg-red-600 text-white border-red-700 shadow"
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
