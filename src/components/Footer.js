import "./FooterStyles.scss";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__main">
        <div className="footer__main-name"></div>
        <div className="footer__main-social">
          <SocialIcon
            className="footer__main-social-icon"
            target="_blank"
            url="linkedin.com/in/sourav-deka-1a724b209"
          />
          <SocialIcon
            className="footer__main-social-icon"
            target="_blank"
            url="https://www.whatsapp.com"
          />
          <SocialIcon
            className="footer__main-social-icon"
            target="_blank"
            url="https://github.com/Sourav-pixel"
          />
          <SocialIcon
            className="footer__main-social-icon"
            target="_blank"
            url="https://www.instagram.com/sourav_pixel/"
          />
          <SocialIcon
            className="footer__main-social-icon"
            target="_blank"
            url="https://www.facebook.com/profile.php?id=100010191737234"
    
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
