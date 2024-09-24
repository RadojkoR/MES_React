import {ReactComponent as IconDaljinskoOtvaranje} from "../../Assets/icons/gate.svg";


export default function DaljinskoOtvaranjKapija() {
    return (
      <article className="daljinskoOtvaranjeCard container-md d-flex flex-column justify-content-center align-items-center">
        <h5 className="fs-1 my-5 ">Daljinsko Otvaranje Kapija i Vrata</h5>
        <div className="daljinskoOtvaranjeCardBody row align-items-center">
          <section className="fs-4 col-lg-9 col-xl-8 pb-5 p-md-5">
            <p>
              Daljinsko otvaranje kapija i vrata pruža vam maksimalnu udobnost i
              sigurnost, omogućavajući vam kontrolu pristupa bez potrebe za
              fizičkim kontaktom. Ovi sistemi su posebno korisni za stambene
              objekte, poslovne prostore i garaže, gde je često potrebno brzo i
              efikasno upravljanje ulazom.
            </p>
            <p>
              Automatizovani sistemi za otvaranje omogućavaju vam da kapije i
              vrata otvorite pomoću daljinskog upravljača, mobilnog telefona ili
              čak automatskog senzora. To smanjuje potrebu za ručnim otvaranjem
              i povećava nivo sigurnosti, jer ulaz mogu kontrolisati samo
              ovlašćene osobe.
            </p>
            <p>
              Naša firma nudi visokokvalitetne sisteme za daljinsko otvaranje
              kapija i vrata, sa modernim rešenjima koja su prilagođena vašim
              potrebama, uz jednostavnu upotrebu i dugotrajnu pouzdanost.
            </p>
          </section>

          <IconDaljinskoOtvaranje className="col-lg-3 col-xl-4 d-none d-lg-block" />
        </div>
      </article>
    );
}