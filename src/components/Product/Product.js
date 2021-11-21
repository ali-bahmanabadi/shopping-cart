import { Link } from "react-router-dom";



const Product = ({ product }) => {

 
  return (
    <div className="w-66 border rounded-md overflow-hidden shadow-sm trnsition hover:shadow-xl">
      <div className="w-full h-56 p-4 flex justify-center">
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt="" className="w-full h-full" />
        </Link>
      </div>
      <Link to={`/product/${product._id}`}>
        <div className="text-lg text-gray-700 font-bold p-3">
          {product.name}
        </div>
      </Link>
      <div className="text-left font-bold text-gray-800 text-xl p-2">
        {`${product.price} تومان`}
      </div>
    </div>
  );
};

export default Product