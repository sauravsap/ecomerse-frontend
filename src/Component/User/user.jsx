import  Button  from "@mui/material/Button";
import { FiUser } from "react-icons/fi";
import { TfiShoppingCart } from "react-icons/tfi";
const User =() => {
    return (
        <>
        <div className="user d-flex align-items-center ms-3">
            <Button className="userDrop mr-3" ><FiUser/></Button>
            <div className="ms-3  cartTab"></div>
            <span className="price">Rs.5000</span>
            <Button className="shopingCart ms-3"><TfiShoppingCart/></Button>
            </div>
        </>
    )
}
export default User;