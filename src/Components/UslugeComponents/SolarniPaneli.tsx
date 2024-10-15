import { ReactComponent as IconSolarPanel } from "../../Assets/icons/solar.svg";
import CardComponent from "./CardComponent";

export default function SolarniPaneli() {
  const usluge = [
    {
      title: "Projektovanje",
      class: "projektovanjeSolarniPaneli",
      body: `Naš tim stručnjaka pažljivo analizira vaše potrebe i uslove na terenu kako bi dizajnirao optimalni sistem solarnih panela koji će vam pružiti maksimalnu efikasnost i uštedu energije.`,
    },
    {
      title: "Montaza",
      class: "montazaSolarniPaneli",
      body: `Koristimo najkvalitetnije materijale i najnovije tehnologije za montažu solarnih panela, osiguravajući dugotrajnost i pouzdanost sistema. Naši tehničari su visoko obučeni i posvećeni pružanju vrhunske usluge.`,
    },
    {
      title: "Obuka Korisnika",
      class: "obukaSolarniPaneli",
      body: `OVerujemo da je edukacija ključna za maksimalno iskorišćenje solarne energije. Naši stručnjaci će vas detaljno obučiti kako da pravilno koristite i održavate vaš sistem solarnih panela, kako biste postigli najbolje rezultate.`
    },
    {
      title: "Smart Home Sistemi",
      class: "smartHomeSolarniPaneli",
      body: `Integracija solarnih panela sa vašim pametnim domom omogućava vam da pratite i upravljate potrošnjom energije na daljinu, čime dodatno povećavate efikasnost i uštedu. Naša firma nudi kompletna rešenja za povezivanje solarnih panela sa različitim smart home platformama.
    Specijalizovani smo za instalacije solarnih panela, pružajući kompletna rešenja za stabilnu i brzu povezanost. Naša posvećenost kvalitetu i sigurnosti garantuje da ćete dobiti pouzdan i efikasan sistem koji će vam služiti dugi niz godina.`
    }
  ];
  return (
    <>
      <article className="uslugeElektricneInstalacije w-100 py-5">
        <div className="container-md">
          <section className="py-3 row d-flex flex-column flex-md-row justify-content-between align-items-center">
            <article className="ElInstalacijeHeader d-flex flex-column justify-content-center align-items-center">
              <IconSolarPanel className="tehZastitaIcon mb-3" />
              <div className="">
                <h4 className="text-center mb-4 fs-1 ">Solarni Paneli</h4>
                <p className="fs-4">
                  Solarni paneli čine osnovu svakog objekta, omogućavajući
                  bezbedno korišćenje solarne energije. Naša firma nudi
                  projektovanje, montažu, obuku korisnika i usklađivanje sa
                  smart home sistemima uz visok nivo sigurnosti i efikasnosti.
                  Specijalizovani smo za instalacije solarnih panela, pružajući
                  kompletna rešenja za stabilnu i brzu povezanost.
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
