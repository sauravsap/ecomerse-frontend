import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 navPart1">
                        <Button className="allCatTab">
                            <span className="menueIcon "><IoIosMenu/></span>
                            <span className="text">
                                All Category
                            </span>
                            <span className="iconDown ms-2"><FaAngleDown /></span>
                        </Button>
                    </div>
                    <div className="col-sm-9 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ">
                            <li className="list-inline-item"><Link to="/">Home</Link></li>
                            <li className="list-inline-item"><Link to="/">Fashion</Link></li>
                            <li className="list-inline-item"><Link to="/">Electronic</Link></li>
                            <li className="list-inline-item"><Link to="/">Bakery</Link></li>
                            <li className="list-inline-item"><Link to="/">Grocery</Link></li>
                            <li className="list-inline-item"><Link to="/">Mobiles</Link></li>
                            <li className="list-inline-item"><Link to="/">Blog</Link></li>
                            <li className="list-inline-item"><Link to="/">Contact</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
        </>
    );      
};

export default Navbar;