import { ContactForm, ContactInfo, Maps } from "../Components/KontaktComponents";
import { Header } from "../Components/Layout";



export default function Kontakt() {
    return (
      <>
        <Header
          className="bgHeaderKontakt"
          bgVideoClassName="headerVideoKontakt"
          headerContainerClass="headerContainer"
        />
        <h1 className="text-center">Kontakt</h1>
        <section className="row">
          <div className="container-md row mx-auto">
            <article className="col-6">
              <h1 className="text-center">Kontakt Informacije</h1>
              <ContactInfo />
            </article>
            <article className="col-6">
              <h1 className="text-center">Kontakt Forma</h1>
              <ContactForm />
            </article>
          </div>
          <article className="row">
            <Maps />
          </article>
        </section>
      </>
    );
}