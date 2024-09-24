import {ReactComponent as IconVideoNadzor} from '../../Assets/icons/videoNadzor.svg';

export default function VideoNadzor() {

    return (
      <article className="videoNadzorCard container-md d-flex flex-column justify-content-center align-items-center">
        <h5 className="fs-1 my-5 ">Video Nadzor i Kontrola Pristupa</h5>
        <div className="videoNadzorCardBody row align-items-center">
          <section className="fs-4 col-lg-9 col-xl-8 pb-5 p-md-5">
            <p>
              Video nadzor i kontrola pristupa pružaju efikasnu zaštitu i
              potpunu kontrolu nad sigurnošću vašeg objekta. Zahvaljujući
              napretku tehnologije, ovi sistemi postali su pristupačni širokom
              broju korisnika. Video nadzor omogućava nadgledanje u realnom
              vremenu i dugotrajnu arhivaciju snimaka, što znatno smanjuje rizik
              od neovlašćenog pristupa ili provale.
            </p>
            <p>
              Kontrola pristupa uključuje interfonske sisteme, RFID kartice,
              šifre ili biometrijske uređaje, čime se osigurava da samo
              ovlašćene osobe mogu pristupiti određenim prostorima. Ovi sistemi
              pružaju fleksibilnost i visoku sigurnost, kako u stambenim tako i
              u poslovnim objektima.
            </p>
            <p>
              Naša firma nudi kompletna rešenja za video nadzor i kontrolu
              pristupa, uz stručno savetovanje i projektovanje sistema
              prilagođenih vašim potrebama, garantujući dugotrajnu pouzdanost i
              jednostavnost korišćenja.
            </p>
          </section>

          <IconVideoNadzor className="col-lg-3 col-xl-4 d-none d-lg-block" />
        </div>
      </article>
    );
}