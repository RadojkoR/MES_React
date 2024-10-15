import { FiPhoneOutgoing } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function ContactInfo() {
  return (
    <div className="p-5">
      <div>
        <h4>Kontaktirajte nas</h4>
        <p>
          Uvek smo otvoreni za saradnju sa novim klijentima. Ako ste
          zainteresovani za rad sa nama, slobodno nas kontaktirajte na jedan od
          sledećih načina
        </p>
      </div>
      <div className="contactPhone mt-5">
        <h5 className="d-flex align-items-center">
          <FiPhoneOutgoing className="contactIcon me-5" />
          Telefoni
        </h5>
        <div className="d-flex flex-column align-items-center mt-4">
          <Link className="contactLink fs-5 mb-3" to="tel:+38132332216">
            Tel/Fax: +38132332216
          </Link>
          <Link className="contactLink  fs-5" to="tel:+381641837109">
            Mob: +381641837109
          </Link>
        </div>
      </div>
      <div className="contactPhone mt-5">
        <h5 className="d-flex align-items-center">
          <TfiEmail className="contactIcon me-5" />
          Email
        </h5>
        <div className="d-flex flex-column align-items-center mt-4">
          <Link
            className="contactLink fs-5 mb-3"
            to="gradimirmes@gmail.com"
          >
            Email: gradimirmes@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}
