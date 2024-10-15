import {FaFacebookF, FaInstagram} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mainFooter pt-2 pb-3 overflow-hidden">
      <h2 className="text-center mt-5 fs-1">Prati nas na drustvenim mrezama</h2>
      <ul className="list-group list-group-horizontal fs-1 justify-content-center align-items-center">
        <li className="footerHrLine col-4 col-sm-5"></li>
        <li className="footerSocIconLi list-group-item bg-transparent border-0">
          <Link
            className="text-light"
            to="https://m.facebook.com/gradimir.jovicic.9"
            target="_blank"
          >
            <FaFacebookF />
          </Link>
        </li>
        <li className="footerSocIconLi list-group-item bg-transparent border-0">
          <Link
            className="text-light"
            to="https://www.instagram.com/"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </li>
        <li className="footerHrLine col-4 col-sm-5"></li>
      </ul>
      <section className="row justify-content-between align-items-center py-5 flex-column flex-md-row mb-5">
        <article className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h6 className="fs-3">Kontakt</h6>
          <Link className="footerLink fs-5 mb-3 fw-light" to="tel:+38132332216">
            Tel/Fax: +38132332216
          </Link>
          <Link className="footerLink fs-5 fw-light" to="tel:+381641837109">
            Tel/Fax: +381641837109
          </Link>
        </article>
        <article className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h6 className="fs-3">Adrese</h6>
          <Link
            className="footerLink fs-5 mb-3 fw-lighter"
            to="https://goo.gl/maps/hKGdCrnaC8M6sJ9e9"
            target="_blank"
          >
            Čačak : Jezdinsko Polje 11
          </Link>
          <Link
            className="footerLink fs-5 fw-lighter"
            to="https://goo.gl/maps/7bi5bopffmo9T1Di7"
            target="_blank"
          >
            Beograd : Ivana Milutinovića 49, Borča
          </Link>
        </article>
      </section>
      <section className="d-flex flex-column flex-sm-row align-items-center justify-content-center pt-5">
        <p>Copyright © 2024 All Rights Reserved M E S &emsp;</p>
        <p>
          Powered by &nbsp;
          <Link className="powerdBy" to="https://radoyko.com" target="_blank">
            Radoyko.com
          </Link>
        </p>
      </section>
    </footer>
  );
}
