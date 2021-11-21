import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router'

import { addToCart, removeFromCart, removeAllCart } from '../action/cartAction'

const Cart = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  const { cartItems } = cart

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id))
    }
  }, [])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))

    if (cartItems.length === 1) {
      navigate('/')
    }
  }

  const removeAllCartHandler = () => {
    dispatch(removeAllCart())

    navigate('/')
  }

  return (
    <div>
      <div>
        <p className="font-bold text-3xl border-b-2 py-3 border-yellow-400">
          سبد خرید
        </p>
        {cartItems.length === 0 ? (
          <p className="text-xl text-center py-10">سبد خرید خالی است</p>
        ) : (
          <div className="my-8">
            {cartItems.map((item) => (
              <div
                key={item.product}
                className="grid grid-cols-6 border-b hover:shadow-xl"
              >
                <div className="pr-3">
                  <img
                    src={item.image}
                    alt=""
                    className="w-24 h-20 object-cover my-4"
                  />
                </div>
                <div className="self-center justify-self-center col-span-2">
                  {item.name}
                </div>
                <div className="self-center justify-self-center col-span-2">
                  {item.price}
                </div>
                <div className="self-center justify-self-end">
                  <button
                    className="text-red-600 pl-3"
                    type="button"
                    onClick={() => removeFromCartHandler(item.product)}
                  >
                    <i className="fa fa-remove text-red-500 text-2xl"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {cartItems.length !== 0 ? (
        <div>
          <button
            onClick={removeAllCartHandler}
            className="text-base font-bold border inline-block py-2 px-5 shadow-md float-left bg-yellow-200 border-yellow-400 rounded mr-5"
          >
            حذف همه
          </button>
          <div className="text-base font-bold border inline-block py-2 px-5 shadow-md float-left bg-yellow-200 border-yellow-400 rounded">
            مجموع: {cartItems.reduce((acc, item) => acc + item.price, 0)}
          </div>
        </div>
      ) : null}
      <div className="clear-both"></div>
    </div>
  )
}

export default Cart
