import { Header} from "../Components/Layout";
import { OnamaHome, UslugeHome } from "../Components/HomeComponents";


export default function Home() {
    return (
      <>      
          <Header
            className="bgHeaderHome"
            bgVideoClassName="headerVideoHome"
            headerContainerClass ="headerContainerHome"
          />
          <section className="container-fluid p-0">
            <UslugeHome />
            <OnamaHome />
          </section>
      </>
    );
};