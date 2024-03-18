import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <FaFacebook className="icons" />
        <FaTwitter className="icons" />
        <FaInstagram  className="icons"/>
        <FaYoutube className="icons" />
      </div>
      <div className="footer-info">
        <i>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat modi
          nisi nesciunt qui harum at quaerat ut tempore culpa magnam provident
          deleniti voluptas officia corrupti, nulla non rem odio laboriosam
          debitis nostrum distinctio voluptatum eveniet, incidunt vero! Facere,
          eligendi mollitia sapiente saepe animi cupiditate sit ut pariatur
          numquam, vel autem!
        </i>
      </div>
      <div className="footer-end">
        <h3>TÜRKİYE</h3>
        <span>| TR</span>
      </div>
    </div>
  );
};

export default Footer;
