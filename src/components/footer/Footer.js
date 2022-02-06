import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <h2>SEERBIT ®</h2>
        <ul className="footer_service">
          <li>Shop</li>
          <li>Info</li>
          <li>Service</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="social">
          <li>
            <FacebookIcon style={{ color: "#3b5998" }} />
          </li>
          <li>
            <TwitterIcon style={{ color: "#00acee" }} />
          </li>
          <li>
            <YouTubeIcon style={{ color: "#FF0000" }} />
          </li>
          <li>
            <LinkedInIcon style={{ color: "#fff" }} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
