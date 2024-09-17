import {ReactComponent as Icon} from "../../Assets/icons/electricalInstallationIcon.svg";

export default function UslugeHome() {
    return (
      <article className="mt-5 row justify-content-between border border-warning p-2">
        <div className="uslugeHomeCard col-4 border border-danger d-flex flex-column justify-content-center align-items-center">
          <Icon className="elInstalationIcon" />
          <div className="uslugeHomeCardBody">
            <h4 className="text-center mb-4">Elektricne Instalacije</h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            non deleniti alias sit vero culpa magnam vel voluptas facere neque.
          </div>
        </div>
        <div className="uslugeHomeCard col-4 border border-primary d-flex flex-column  justify-content-center align-items-center">
          <Icon className="elInstalationIcon" />
          <div className="uslugeHomeCardBody">
            <h4 className="text-center mb-4">Tehnicka Zastita</h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            non deleniti alias sit vero culpa magnam vel voluptas facere neque.
          </div>
        </div>
        <div className="uslugeHomeCard col-4 border border-success d-flex flex-column  justify-content-center align-items-center">
          <Icon className="elInstalationIcon" />
          <div className="uslugeHomeCardBody">
            <h4 className="text-center mb-4">Solarni Paneli</h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
            non deleniti alias sit vero culpa magnam vel voluptas facere neque.
          </div>
        </div>
      </article>
    );
}