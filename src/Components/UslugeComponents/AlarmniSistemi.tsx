 
import { ReactComponent as AlarmniSistemiIcon } from "../../Assets/icons/alarm_system_icon.svg";


 export default function AlarmniSistemi() {

  return (
    <article className="alarmniSistemiCard container-md d-flex flex-column justify-content-center align-items-center mt-5">
      <h5 className="fs-1 mt-5 ">Alarmni sistemi</h5>
      <div className="alarmniSistemiCardBody row align-items-center">
        <p className="fs-4 col-lg-9 col-xl-8 p-5">
          Zaštita objekata alarmnim sistemom predstavlja veoma efikasan vid
          zaštite od provale i krađe imovine. Alarmni sistemi danas su dostupni
          širem broju korisnika, prvenstveno zbog znatno povoljnije cene nego
          prethodnih godina. U pogledu sigurnosti kroz iskustvo se pokazalo da
          provalnici u izuzetno retkim slučajevima za krađu biraju objekte koji
          su obezbeđeni alarmnim sistemom. Pouzdanost alarmnih sistema kreće se
          od manje pouzdanih i naravno jeftinijih sistema za samougradnju do
          profesionalnih sistema zaštite koji pružaju visoku sigurnost. Za koji
          alarmni sistem će se klijent odlučiti, zavisi od potreba. Uglavnom se
          pokazalo da profesionalni alarmni sistemi iskazuju svoju vrednost kroz
          dugi niz godina upotrebljivosti, pouzdanost i jednostavnost upotrebe.
          Navedeni sistemi za samougradnju zbog nedostatka rezervnih delova, kao
          i neretko nestanka proizvođača sa tržišta, često završe u kanti za
          smeće. Naša firma može Vam ponuditi konsultacije i savete kako bi
          projektovali sistem koji će zadovoljiti Vaše potrebe.
        </p>
        <AlarmniSistemiIcon className="col-lg-3 col-xl-4 d-none d-md-block" />
      </div>
    </article>
  );
}