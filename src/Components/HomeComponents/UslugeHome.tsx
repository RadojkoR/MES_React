import {ReactComponent as IconElInstalacije} from "../../Assets/icons/electricalInstallationIcon.svg";
import{ReactComponent as IconTehZastita} from "../../Assets/icons/emergency.svg";
import{ReactComponent as IconSolarHouse} from "../../Assets/icons/solar-house.svg";

export default function UslugeHome() {
    return (
      <article className="uslugeHome w-100">
        <div className="container">
          <section className="py-5 row d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="uslugeHomeCard col-4 d-flex flex-column justify-content-center align-items-center">
              <IconElInstalacije className="elInstalationIcon" />
              <article className="uslugeHomeCardBody">
                <h4 className="text-center mb-4">Elektricne Instalacije</h4>
                <p className="uslugeHomeCardBodyTxt">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sapiente, non deleniti alias sit vero culpa magnam vel
                  voluptas facere neque.
                </p>
              </article>
            </div>
            <article className="uslugeHomeCard col-4 d-flex flex-column justify-content-center align-items-center">
              <IconTehZastita className="elInstalationIcon" />
              <div className="uslugeHomeCardBody">
                <h4 className="text-center mb-4">Tehnicka Zastita</h4>
                <ul className="uslugeHomeCardBodyTxt">
                  <li className="list-group">- Alarmni sistemi</li>
                  <li className="list-group">
                    - Video nadzor, kontrola pristupa
                  </li>
                  <li className="list-group">- Interfoni, video interfon</li>
                  <li className="list-group">
                    - Daljinsko otvaranje vrata i kapija
                  </li>
                </ul>
              </div>
            </article>
            <article className="uslugeHomeCard col-4 d-flex flex-column  justify-content-center align-items-center">
              <IconSolarHouse className="elInstalationIcon" />
              <div className="uslugeHomeCardBody">
                <h4 className="text-center mb-4">Solarni Paneli</h4>
                <p className="uslugeHomeCardBodyTxt">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sapiente, non deleniti alias sit vero culpa magnam vel
                  voluptas facere neque.
                </p>
              </div>
            </article>
          </section>
        </div>
      </article>
    );
}