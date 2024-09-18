import {ReactComponent as Icon} from "../../Assets/icons/electricalInstallationIcon.svg";

export default function UslugeHome() {
    return (
      <article className="uslugeHome w-100">
        <div className="container">
          <section className="py-5 row justify-content-between">
            <div className="uslugeHomeCard col-4 d-flex flex-column justify-content-center align-items-center">
              <Icon className="elInstalationIcon" />
              <article className="uslugeHomeCardBody">
                <h4 className="text-center mb-4">Elektricne Instalacije</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Sapiente, non deleniti alias sit vero culpa magnam vel
                  voluptas facere neque.
                </p>
              </article>
            </div>
            <article className="uslugeHomeCard col-4 d-flex flex-column  justify-content-center align-items-center">
              <Icon className="elInstalationIcon" />
              <div className="uslugeHomeCardBody">
                <h4 className="text-center mb-4">Tehnicka Zastita</h4>
                <ul className="list-group">
                  <li className="list-group">- Alarmni sistemi</li>
                  <li className="list-group">- Video nadzor, kontrola pristupa</li>
                  <li className="list-group">- Interfoni, video interfon</li>
                  <li className="list-group">- Daljinsko otvaranje vrata i kapija</li>
                </ul>
              </div>
            </article>
            <article className="uslugeHomeCard col-4 d-flex flex-column  justify-content-center align-items-center">
              <Icon className="elInstalationIcon" />
              <div className="uslugeHomeCardBody">
                <h4 className="text-center mb-4">Solarni Paneli</h4>
                <p>
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