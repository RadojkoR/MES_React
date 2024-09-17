import { Header, UslugeHome} from "../Components/Layout";


export default function Home() {
    return (
      <>      
          <Header
            className="bgHeaderHome"
            bgVideoClassName="headerVideoHome"
            headerContainerClass ="headerContainerHome"
          />
          <section className="container">
            <UslugeHome />
          </section>
        

        
      </>
    );
};