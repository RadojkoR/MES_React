import { Header } from "../Components/Layout";
import { AlarmniSistemiGallery, InterfoniGallery, VideoNadzorGallery } from "../Components/projektiComponents";



export default function Projekti() {
    return (
      <>
        <Header
          className="bgHeaderUsluge"
          bgVideoClassName="headerVideoUsluge"
          headerContainerClass="headerContainer"
        />
        <section>
          <AlarmniSistemiGallery />
          <VideoNadzorGallery />
          <InterfoniGallery />
        </section>
      </>
    );
}