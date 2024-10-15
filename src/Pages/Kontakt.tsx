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
        <section className="container-xxl my-5">
          <div className="row mx-auto mb-5">
            <article className="col-12 col-lg-6">
              <ContactInfo />
            </article>
            <article className="col-12 col-sm-11 col-md-8 col-lg-6 mx-auto">
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