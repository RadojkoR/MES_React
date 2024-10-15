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
        <section className="row my-5">
          <div className="container-md row mx-auto mb-5">
            <article className="col-6">
              <ContactInfo />
            </article>
            <article className="col-6">
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