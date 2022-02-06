import {useState} from "react";
import Logo from "../assets/logo.png";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import Badge from "@material-ui/core/Badge";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import "./header.css";

const Header = ({cart}) => {
  const [showMenu, setShowMenu] = useState(true)

  console.log('cartCount',cart)

  return (
    <nav className="header">
      <div className="header_wrapper" id={showMenu ? "header_hidden": ""}>
        <ul className="follow_button" id={showMenu ? "follow_hidden": ""}>
          <li>Follow:</li>
          <li><FacebookIcon style={{ color: "#4267B2" }}/></li>
          <li><TwitterIcon style={{ color: "#00acee" }}/></li>
          <li><LinkedInIcon style={{ color: "#0077b5" }}/></li>
        </ul>

        <div className="header_logo" id={showMenu ? "logo_hidden": ""}>
          <img src={Logo} alt="Logo" />
        </div>

        <ul className="header_status" id={showMenu ? "status_hidden": ""}>
          <li>$239.00</li>
          <li><SearchOutlinedIcon/> </li>
          <li>
          <Badge badgeContent={cart} showZero color="primary">
            <LocalMallOutlinedIcon fontSize="medium"/>
          </Badge>
          </li>
        </ul>

        <span className={`mobile_menu ${showMenu? "hidden" : ""}`} onClick={()=> setShowMenu(!showMenu)}>
          {showMenu
          ? <CloseIcon fontSize="large"/>
          : <MenuIcon fontSize="large"/>}
        </span>
      </div>
    </nav>
  );
};

export default Header;
