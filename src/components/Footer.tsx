import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMapMarked,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-custom py-5">
      <div className="container">
        <div className=" footer-box d-flex flex-column flex-md-row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-logo mb-3">
              <img src="/path/to/logo.png" alt="Natural Parfum Logo" />
            </div>
            <ul className="list-unstyled">
              <li>
                <FaMapMarked /> Pordenone, Italia
              </li>
              <li>
                <FaMailBulk /> dimazanre@gmail.com
              </li>
              <li>
                <FaPhoneAlt /> +39 375 557 8879
              </li>
            </ul>
            <div className="social-icons mt-3">
              <FaGithub />
              <FaLinkedin />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Our Products</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">The Support Suite</a>
              </li>
              <li>
                <a href="#">The Sales Suite</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Guide</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Top Features</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Ticketing System</a>
              </li>
              <li>
                <a href="#">Knowledge Base</a>
              </li>
              <li>
                <a href="#">Community Forum</a>
              </li>
              <li>
                <a href="#">Help Desk Software</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Product Support</a>
              </li>
              <li>
                <a href="#">Request Demo</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
              <li>
                <a href="#">Peoplepower Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="line"></div>

        <div className="row mt-4">
          <div className="col-md-6 text-center text-md-start">
            <NavLink to={"https://dimazanre.com"}>
              © Dima - All Rights Reserved
            </NavLink>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <img
              src="./pngs/footer_socials.png"
              alt="Payment Methods"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
