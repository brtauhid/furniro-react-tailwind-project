import { Link } from "react-router-dom";
import { FaUser, FaSearch, FaRegHeart,FaShoppingCart} from "react-icons/fa";
import logo from '../../assets/furniro-logo.png'
const Header = () => {

    return (
        <div className="flex justify-between items-center h-24">
            <div className="header-left flex items-center">
                <img src={logo} alt="" /> <h3 className="ml-2 text-3xl font-bold">Furniro</h3>
            </div>
            <div className="header-center">
                <nav>
                    <ul className="w-[500px] flex justify-between text-xl">
                        <Link to= "/">Home</Link>
                        <Link to= "/shop">Shop</Link>
                        <Link to= "/about">About</Link>
                        <Link to= "/contact">Contact</Link>
                    </ul>
                </nav>
            </div>
            <div className="header-right flex ">
            <FaUser className="mr-8 text-xl"></FaUser>
            <FaSearch className="mr-8 text-xl"></FaSearch>
            <FaRegHeart className="mr-8 text-xl"></FaRegHeart>
            <FaShoppingCart className="mr-8 text-xl"></FaShoppingCart>
            </div>
        </div>
    );
};

export default Header;