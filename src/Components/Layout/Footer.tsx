import {FaFacebookF, FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mainFooter mt-5 pt-2 pb-3">
      <h6 className="text-center mt-5 fs-1">Prati nas na drustvenim mrezama</h6>
      <ul className="list-group list-group-horizontal fs-1 justify-content-center align-items-center">
        <li className="footerHrLine col-5"></li>
        <li className="footerSocIconLi list-group-item bg-transparent border-0 ">
          <a className="text-light" href="https://www.facebook.com/" >
            <FaFacebookF />
          </a>
        </li>
        <li className="footerSocIconLi list-group-item bg-transparent border-0">
          <a className="text-light" href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </li>
        <li className="footerHrLine col-5"></li>
      </ul>
      <section className="d-flex justify-content-center mt-5">
        <p>Copyright © 2024 All Rights Reserved M E S &emsp; | &emsp;</p>
        <a className="" href="https://radoyko.com" target="_blank">Radojko.com</a>
      </section>
    </footer>
  );
}
