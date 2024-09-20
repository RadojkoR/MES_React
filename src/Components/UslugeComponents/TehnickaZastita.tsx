import {ReactComponent as IconTehZastita} from '../../Assets/icons/emergency.svg';
import { ReactComponent as AlarmniSistemiIcon } from "../../Assets/icons/alarm_system_icon.svg";

export default function TehnickaZastita() {
    return (
      <article className="uslugeTehZastita w-100">
        <div className="container">
          <section className="py-3 row d-flex flex-column flex-md-row justify-content-between align-items-center position">
            <article className="tehZastitaHeader d-flex flex-column justify-content-center align-items-center mb-5">
              <IconTehZastita className="tehZastitaIcon" />
              <div className="">
                <h4 className="text-center mb-4 fs-1">Tehnicka Zastita</h4>
                <p className="fs-4">
                  Tehnička zaštita uključuje alarmne sisteme, video nadzor i
                  kontrolu pristupa za potpunu sigurnost vašeg objekta. Takođe
                  nudimo interfonske i video-interfonske sisteme, kao i
                  daljinsko otvaranje vrata i kapija, omogućavajući vam potpunu
                  kontrolu pristupa.
                </p>
              </div>
            </article>
            <div>
              <article className="alarmniSistemiCard d-flex flex-column justify-content-center align-items-center mt-5">
                <h5 className="fs-1 mt-5">Alarmni sistemi</h5>
                <div className="alarmniSistemiCardBody row align-items-center">
                  <p className="fs-4 col-8">
                    Zaštita objekata alarmnim sistemom predstavlja veoma
                    efikasan vid zaštite od provale i krađe imovine. Alarmni
                    sistemi danas su dostupni širem broju korisnika, prvenstveno
                    zbog znatno povoljnije cene nego prethodnih godina. U
                    pogledu sigurnosti kroz iskustvo se pokazalo da provalnici u
                    izuzetno retkim slučajevima za krađu biraju objekte koji su
                    obezbeđeni alarmnim sistemom. Pouzdanost alarmnih sistema
                    kreće se od manje pouzdanih i naravno jeftinijih sistema za
                    samougradnju do profesionalnih sistema zaštite koji pružaju
                    visoku sigurnost. Za koji alarmni sistem će se klijent
                    odlučiti, zavisi od potreba. Uglavnom se pokazalo da
                    profesionalni alarmni sistemi iskazuju svoju vrednost kroz
                    dugi niz godina upotrebljivosti, pouzdanost i jednostavnost
                    upotrebe. Navedeni sistemi za samougradnju zbog nedostatka
                    rezervnih delova, kao i neretko nestanka proizvođača sa
                    tržišta, često završe u kanti za smeće. Naša firma može Vam
                    ponuditi konsultacije i savete kako bi projektovali sistem
                    koji će zadovoljiti Vaše potrebe.
                  </p>
                  <AlarmniSistemiIcon className="col-4" />
                </div>
              </article>
            </div>
          </section>
        </div>
      </article>
    );
}