import { Link } from "react-router-dom";
import Logo from "../../assets/image/Logo.png";
import CountryDropdown from "../CountreDropDown/country-dd-index";
import HeaderSearch from "../HeaderSearch/headerSearch";
import User from "../User/user";

const Header = () => {
    return (
       <>
    <div className="headerWrapper">
        <div className="top-strip bg-blue">
            <div className="container">
                <p className="mb-0 mt-0 text-center"> Shipping All Over the World</p>
            </div>
        </div>
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="logoWrapper d-fles align-items-center  col-sm-2">
                        <Link to={'/'}><img src={Logo} alt="logo" /></Link>
                     </div>
                     <div className="col-sm-10 d-flex align-items-center part2">
                          <CountryDropdown/>
                            <HeaderSearch/>
                            <User/>

                         </div>
                 </div>
             </div>
        </header>

            
    </div>
       </>
    );
}

export default Header;