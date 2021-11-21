import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

const Header = () => {
  return (
    <header className="bg-red-700 text-white py-3">
      <div className="container mx-auto max-w-screen-xl flex justify-between px-5">
        <nav>
          <Link to="/account">
            <i className="fa fa-user text-gray-300 hover:text-white transition p-2 duration-300"></i>
          </Link>
          <Link to="/cart">
            <i className="fa fa-shopping-cart text-gray-300 hover:text-white transition p-2 duration-300"></i>
          </Link>
        </nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
