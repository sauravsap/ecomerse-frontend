import Button from "@mui/material/Button";
import { IoSearchSharp } from "react-icons/io5";

const HeaderSearch = () => {
return (
    <>
    <div className="headerSearch ms-3 mr-3">
        <input type="text" placeholder="Search for Products..." />
        <Button><IoSearchSharp /></Button>
    </div>
    </>
);
};
export default HeaderSearch;