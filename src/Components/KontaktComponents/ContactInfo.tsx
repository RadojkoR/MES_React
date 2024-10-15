import { FiPhoneOutgoing } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

export default function ContactInfo() {
  return (
    <div className="contactInfo px-xxl-5 px-xl-4 px-lg-3 my-5">
      <div>
        <h4 className="fs-1 mb-4">Kontaktirajte nas</h4>
        <p className="fs-4 fw-lighter">
          Uvek smo otvoreni za saradnju sa novim klijentima. Ako ste
          zainteresovani za rad sa nama, slobodno nas kontaktirajte na jedan od
          sledećih načina.
        </p>
      </div>
      <div className="contactPhone d-flex mt-5">
        <div>
          <FiPhoneOutgoing className="contactIcon me-5" />
        </div>
        <div>
          <h5>Telefoni</h5>
          <div className="d-flex flex-column mt-4">
            <a
              href="tel:+38132332216"
              className="contactLink fs-5 mb-3 fw-lighter"
            >
              Tel/Fax: +38132332216
            </a>
            <a href="tel:+381641837109" className="contactLink fw-lighter fs-5">
              Mob: +381641837109
            </a>
          </div>
        </div>
      </div>
      <div className="contactPhone d-flex mt-5">
        <div>
          <TfiEmail className="contactIcon me-5" />
        </div>

        <div className="d-flex flex-column">
          <h5>Email</h5>
          <a
            href="mailto:gradimirmes@gmail.com"
            className="contactLink fs-5 mt-4 fw-lighter"
          >
            Email: gradimirmes@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
