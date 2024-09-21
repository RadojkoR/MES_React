import { Header } from "../Components/Layout";
import { AlarmniSistemi, DaljinskoOtvaranjKapija, ElektricneInstalacije, Interfoni, TehnickaZastita, VideoNadzor } from "../Components/UslugeComponents";


export default function Usluge() {
    return (
      <>
        <Header
          className="bgHeaderUsluge"
          bgVideoClassName="headerVideoUsluge"
          headerContainerClass="headerContainer"
        />
        <TehnickaZastita />
        <AlarmniSistemi />
        <VideoNadzor />
        <Interfoni />
        <DaljinskoOtvaranjKapija />
        <ElektricneInstalacije />
      </>
    );
}