import {ReactComponent as IconElInstalacije} from "../../Assets/icons/electrician.svg";
import CardComponent from "./CardComponent";

export default function ElektricneInstalacije() {
  const usluge = [
     {
      title: "Električne instalacije slabe struje",
      class: "elSlabeStruje",
      body: `Električne instalacije slabe struje predstavljaju ključni deo svakog modernog objekta, omogućavajući bezbedno i efikasno korišćenje telekomunikacionih i sigurnosnih sistema. Naša firma nudi projektovanje, ugradnju i održavanje ovih instalacija uz visok nivo sigurnosti i efikasnosti. Specijalizovani smo za instalacije koje obuhvataju telekomunikacione sisteme, sigurnosne sisteme i mrežne instalacije. Pouzdanost naših sistema kreće se od manje pouzdanih i jeftinijih rešenja za samougradnju do profesionalnih sistema koji pružaju visoku sigurnost. Naša firma može Vam ponuditi konsultacije i savete kako bi projektovali sistem koji će zadovoljiti Vaše potrebe i osigurati dugoročnu pouzdanost i jednostavnost upotrebe.`,
    },
     {
      title: "Električne instalacije srednjeg napona",
      class: "elSrednjegNapona",
      body: `Električne instalacije srednjeg napona igraju ključnu ulogu u distribuciji električne energije u industrijskim i komercijalnim objektima. Naša firma nudi projektovanje, ugradnju i održavanje ovih instalacija uz visok nivo sigurnosti i efikasnosti. Specijalizovani smo za instalacije koje obuhvataju transformacione stanice, kablovske mreže i razvodne ormare. Pouzdanost naših sistema osigurava stabilno i bezbedno snabdevanje električnom energijom, prilagođeno specifičnim potrebama svakog klijenta. Naša firma može Vam ponuditi konsultacije i savete kako bi projektovali sistem koji će zadovoljiti Vaše potrebe i osigurati dugoročnu pouzdanost i jednostavnost upotrebe.`,
    },
     {
      title: "Električne instalacije niskog napona",
      class: "elniskogNapona",
      body: `Električne instalacije niskog napona su ključne za svakodnevno funkcionisanje stambenih i poslovnih objekata, omogućavajući bezbedno korišćenje električne energije za različite uređaje i sisteme. Naša firma nudi projektovanje, ugradnju i održavanje ovih instalacija uz visok nivo sigurnosti i efikasnosti. Specijalizovani smo za instalacije koje obuhvataju razvodne table, kablovske mreže i osvetljenje. Pouzdanost naših sistema osigurava stabilno i bezbedno snabdevanje električnom energijom, prilagođeno specifičnim potrebama svakog klijenta. Naša firma može Vam ponuditi konsultacije i savete kako bi projektovali sistem koji će zadovoljiti Vaše potrebe i osigurati dugoročnu pouzdanost i jednostavnost upotrebe.`,
    },
    { 
      title: "Mrežni Sistemi",
      class: "mrezniSistemi",
      body: `Mrežni sistemi su ključni za povezivanje i komunikaciju unutar stambenih i poslovnih objekata, omogućavajući stabilnu i brzu razmenu podataka. Naša firma nudi projektovanje, ugradnju i održavanje mrežnih sistema uz visok nivo sigurnosti i efikasnosti. Specijalizovani smo za instalacije koje obuhvataju kablovske mreže, bežične mreže i mrežnu opremu. Pouzdanost naših sistema osigurava stabilnu i sigurnu povezanost, prilagođenu specifičnim potrebama svakog klijenta. Naša firma može Vam ponuditi konsultacije i savete kako bi projektovali sistem koji će zadovoljiti Vaše potrebe i osigurati dugoročnu pouzdanost i jednostavnost upotrebe.`,
    },
  ];
  

    return (
      <>
        <article className="uslugeElektricneInstalacije w-100 py-5">
          <div className="container-md">
            <section className="py-3 row d-flex flex-column flex-md-row justify-content-between align-items-center">
              <article className="ElInstalacijeHeader d-flex flex-column justify-content-center align-items-center">
                <IconElInstalacije className="tehZastitaIcon" />
                <div className="">
                  <h4 className="text-center mb-4 fs-1 ">
                    Elektricne Instalacije
                  </h4>
                  <p className="fs-4">
                    Električne instalacije čine osnovu svakog objekta,
                    omogućavajući bezbedno korišćenje električne energije. Naša
                    firma nudi projektovanje, ugradnju i održavanje instalacija
                    uz visok nivo sigurnosti i efikasnosti. Specijalizovani smo
                    za instalacije slabe struje, srednjeg i niskog napona, kao i
                    mrežne sisteme, pružajući kompletna rešenja za stabilnu i
                    brzu povezanost.
                  </p>
                </div>
              </article>
            </section>
          </div>
        </article>
        {usluge.map((usluge, index) => (
            <CardComponent usluge={usluge} key={index} />
        ))}
      </>
    );
}