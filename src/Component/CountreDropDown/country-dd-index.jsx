import Button  from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";

const CountryDropdown = () => {
    return (
        <>
        <Button className="countryDrop">
            <div className="info d-flex flex-column">
                <span className="lable">Your Location</span>
                <span className="value">Nepal</span>
            </div>
            <div>
                <span className="ms-3"><FaAngleDown/></span>
            </div>
        </Button>
        </>
    );
}
    export default CountryDropdown;