import { Header } from "../Components/Layout";
import { AlarmniSistemi, DaljinskoOtvaranjKapija, ElektricneInstalacije, Interfoni, SolarniPaneli, TehnickaZastita, VideoNadzor } from "../Components/UslugeComponents";


export default function Usluge() {
    return (
      <>
        <Header
          className="bgHeaderUsluge"
          bgVideoClassName="headerVideoUsluge"
          headerContainerClass="headerContainer"
        />
        <section className="tehZastitaContainer pb-5">
          <TehnickaZastita />
          <AlarmniSistemi />
          <VideoNadzor />
          <Interfoni />
          <DaljinskoOtvaranjKapija />
        </section>
        <section className="elInstalacijeContainer pb-5">
          <ElektricneInstalacije />
        </section>
        <section className="solarniPaneliContainer pb-5">
          <SolarniPaneli />
        </section>
      </>
    );
}