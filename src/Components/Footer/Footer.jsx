import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaLinkedin,FaSquareInstagram} from "react-icons/fa6";
import logo from '../../assets/furniro-logo.png';
const Footer = () => {
    return (
        <div className=" w-full h-[420px]">
            <div className="w-[1240px] mx-auto flex items-center h-full justify-evenly">
                <div className="w-[20%] -mt-8">
                    <h3 className="text-3xl font-bold mb-4 flex"> <img className="mr-4" src={logo} alt="" /> Furniro.</h3>
                    <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor a, enim perspiciatis voluptatum </p>
                    <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                </div>
                <div className="ml-10 w-[20%] h-1/2">
                    <h3 className="text-2xl font-bold mb-4 -mt-5">Links</h3>
                    <ul className="flex flex-col">
                        <Link className="mb-4" to = '/'>Home</Link>
                        <Link className="mb-4" to = '/shop'>Shop</Link>
                        <Link className="mb-4" to = '/about'>About</Link>
                        <Link className="mb-4" to = '/contact'>Contact</Link>
                    </ul>
                </div>
                <div className="w-[20%] h-1/2">
                    <h5 className="text-2xl font-bold mb-4 -mt-5">Help</h5>
                    <ul className="flex flex-col">
                        <Link className = 'mb-4' to = '/'>Payment Option</Link>
                        <Link className = 'mb-4' to = '/'>Returns</Link>
                        <Link className = 'mb-4' to = '/'>Privacy Policy</Link>
                    </ul>
                </div>
                <div className="w-[20%]">
                    <h5 className="text-2xl font-bold mb-4 -mt-20 ">Newsletter</h5>
                    <input className="px-10 py-2 relative pl-2  border-2 border-slate-300 " type="text" placeholder="Enter your email address" />
                    <button className="bg-slate-500 text-white px-8 py-2 mt-3" type="submit">Subscribe</button>
                    <div className="flex mt-6">
                        <FaFacebook  className="mr-6 text-2xl"></FaFacebook>
                        <FaYoutube className="mr-6 text-2xl" ></FaYoutube>
                        <FaLinkedin  className="mr-6 text-2xl"></FaLinkedin>
                        <FaSquareInstagram  className="mr-6 text-2xl"></FaSquareInstagram>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;