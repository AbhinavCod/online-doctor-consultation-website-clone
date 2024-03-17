import { DropdownItem, DropdownMenu } from "react-bootstrap";
import Dropdown  from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
  import 'bootstrap/dist/css/bootstrap.min.css';

const DropDown1 = ()=>{

    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                For Corporates
            </Dropdown.Toggle>

            <DropdownMenu>
                <DropdownItem><Link to={"/"}>Health & Wellness Plans</Link></DropdownItem>
                <DropdownItem><Link to={"/"}>Insurance</Link></DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
};

export default DropDown1;