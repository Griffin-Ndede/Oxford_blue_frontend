import { DollarSign, Home, Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router";
// import { HashLink } from "react-router-hash-link";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* <div className="flex justify-center w-4xl mx-auto"> */}
                <div className="w-full   z-20 fixed px-10 py-4 shadow-2xl bg-white">
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <Link to="/">
                                <img
                                    src="/public/images/oxfordblue_logo.png"
                                    alt="Bluprint Designs logo"
                                    className="w-auto h-14"
                                />
                            </Link>
                        </div>
                        <ul className="hidden md:flex text-custom-blue gap-8 items-center font-light">
                            <Link
                                to="/"
                                className="flex items-center gap-2 hover:text-custom-orange transition"
                            >
                                <Home size={20} />
                                <span>Home</span>
                            </Link>

                            <Link
                                to="/pricing"
                                className="flex items-center gap-2 hover:text-custom-orange transition"
                            >
                                <DollarSign size={20} />
                                <span>Pricing</span>
                            </Link>

                            <Link
                                to="/order"
                                className="flex items-center gap-2 hover:text-custom-orange transition"
                            >
                                <ShoppingCart size={20} />
                                <span>Order</span>
                            </Link>
                        </ul>

                        <div className="md:hidden px-5 relative">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-custom-blue focus:outline-none"
                                aria-expanded={isMenuOpen}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isMenuOpen ? (
                                        <X />
                                    ) : (
                                        <Menu />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            {/* </div> */}

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className=" absolute right-0 inset-x-0 top-18 w-full mx-auto bg-white py-6 px-8 text-center rounded-b-lg shadow-lg z-10">
                    <ul className="space-y-6">
                        <Link
                            to="/"
                            className="flex items-center gap-2 hover:text-custom-orange transition"
                        >
                            <Home size={20} />
                            <span>Home</span>
                        </Link>

                        <Link
                            to="/pricing"
                            className="flex items-center gap-2 hover:text-custom-orange transition"
                        >
                            <DollarSign size={20} />
                            <span>Pricing</span>
                        </Link>

                        <Link
                            to="/order"
                            className="flex items-center gap-2 hover:text-custom-orange transition"
                        >
                            <ShoppingCart size={20} />
                            <span>Order</span>
                        </Link>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;
