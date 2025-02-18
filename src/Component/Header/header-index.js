import { Link } from "react-router-dom";
import Logo from "../../assets/image/Logo.png";

const Header = () => {
    return (
       <>
    <div className="headerWrapper">
        <div className="top-strip bg-purple">
            <div className="container">
                <p className="mb-0 mt-0 text-center"> Shipping All Over the World</p>
            </div>
        </div>
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="logoWrapper d-fles align-items-center  col-sm-2">
                        <Link to={'/'}><img src={Logo} alt="logo" /></Link>
                     </div>
                     
                 </div>
             </div>
        </div>

            
    </div>
       </>
    );
}

export default Header;