import { Header } from "../Components/Layout";
import { TehnickaZastita } from "../Components/UslugeComponents";


export default function Usluge() {
    return (
      <>
        <Header
          className="bgHeaderUsluge"
          bgVideoClassName="headerVideoUsluge"
          headerContainerClass="headerContainer"
        />
        <TehnickaZastita />
      </>
    );
}