import {ReactComponent as IntercomIcon} from '../../Assets/icons/intercom.svg';

export default function Interfoni() {
    return (
      <article className="interfoniCard container-md d-flex flex-column justify-content-center align-items-center">
        <h5 className="fs-1 my-5 ">Interfoni, Video Interfoni</h5>
        <div className="intrfoniCardBody row align-items-center">
          <section className="fs-4 col-lg-9 col-xl-8 pb-5 p-md-5">
            <p>
              Interfonski i video-interfonski sistemi omogućavaju jednostavnu i
              sigurnu komunikaciju sa posetiocima pre nego što im dozvolite
              pristup u vaš objekat. Ovi sistemi su idealni za stambene zgrade,
              kuće i poslovne prostore, pružajući dodatni nivo sigurnosti i
              kontrole.
            </p>
            <p>
              Video interfon dodatno omogućava vizuelnu identifikaciju
              posetilaca, što značajno smanjuje rizik od neovlašćenog pristupa.
              Ovi sistemi često dolaze sa funkcijama snimanja i daljinskog
              otključavanja vrata, čime se dodatno olakšava upravljanje
              sigurnošću.
            </p>
            <p>
              Naša firma nudi pouzdana rešenja za interfonske i
              video-interfonske sisteme, uz profesionalnu instalaciju i podršku,
              osiguravajući vam dugotrajnu zaštitu i komfor u svakodnevnom
              korišćenju.
            </p>
          </section>

          <IntercomIcon className="col-lg-3 col-xl-4 d-none d-lg-block" />
        </div>
      </article>
    );
}