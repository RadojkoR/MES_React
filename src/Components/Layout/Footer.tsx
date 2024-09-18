import {FaFacebookF, FaInstagram} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mainFooter mt-5 pt-2 pb-3">
      <h6 className="text-center mt-5 fs-1">Prati nas na drustvenim mrezama</h6>
      <ul className="list-group list-group-horizontal fs-1 justify-content-center align-items-center">
        <li className="footerHrLine col-5"></li>
        <li className="footerSocIconLi list-group-item bg-transparent border-0 ">
          <Link className="text-light" to="https://m.facebook.com/gradimir.jovicic.9" target="_blank"><FaFacebookF /></Link>
        </li>
        <li className="footerSocIconLi list-group-item bg-transparent border-0">
          <Link className="text-light" to="https://www.instagram.com/" target="_blank"><FaInstagram /></Link>
        </li>
        <li className="footerHrLine col-5"></li>
      </ul>
      <section className="d-flex justify-content-center mt-5">
        <p>Copyright © 2024 All Rights Reserved M E S &emsp; | &emsp;</p>
        <p>Powered by &nbsp;<Link className="powerdBy" to="https://radoyko.com" target="_blank">Radoyko.com</Link></p>
      </section>
    </footer>
  );
}
