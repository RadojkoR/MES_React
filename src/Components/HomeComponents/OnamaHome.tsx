import ONamaImg from "../../Assets/onamaHomeCollage.webp";

export default function OnamaHome() {
  return (
    <article className="oNamaHome w-100">
      <div className="container">
        <section className="onamaHome row">
          <div className="col-5">
            <img className="w-100" src={ONamaImg} alt="" />
          </div>
          <div className="col-7">
            <h2 className="text-center mb-5 fs-1">O nama</h2>
            <p className="p-3 pb-0 fs-4">
              Sami počeci firme MES se vezuju za početak 80-tih godina kada je
              sve počelo od malog servisa električnih kućnih aparata. U tom
              periodu vršene su samo usluge servisiranja električnih kućnih
              aparata i bele tehnike.
            </p>
            <p className="p-3 py-0 fs-4">
              Svojim predanim radom i stalnim napretkom izborili smo se za
              poziciju renomiranog poslovnog subjekta u području
              <b>
                tehničke zaštite, ugradnje solarnih panela, elektro instalacije,
                kao i održavanja opreme u domaćinstvu i u ugostiteljstvu.
              </b>
            </p>
            <p className="p-3 py-0 fs-4">
              Kao rezultat povećanja obima posla, ubrzo je stvorena potreba za
              osnivanjem preduzeća koje bi prihvatilo povećani obim poslovanja.
            </p>
            <p className="p-3 py-0 fs-4">
              Već dugi niz godina uspevamo da zadovoljimo sve korisnike,
              raspolažemo visoko stručnim kadarom koji je u mogućnosti da reši i
              najkompleksnije probleme.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
