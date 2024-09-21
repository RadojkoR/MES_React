import {ReactComponent as IconElInstalacije} from "../../Assets/icons/electrician.svg";

export default function ElektricneInstalacije() {
    return (
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
                  firma nudi projektovanje, ugradnju i održavanje instalacija uz
                  visok nivo sigurnosti i efikasnosti. Pored standardnih
                  rešenja, nudimo i integraciju pametnih sistema za potpunu
                  kontrolu potrošnje i funkcionalnosti..
                </p>
              </div>
            </article>
          </section>
        </div>
      </article>
    );
}