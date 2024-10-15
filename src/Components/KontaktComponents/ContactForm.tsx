
export default function ContactForm(){
    return (
      <form className="contactForm bg-dark text-secondary border-secondary p-3 p-lg-5 my-5 d-flex flex-column">      
          <div className="mb-4">
            <input
              type="text"
              className="form-control text-light border-secondary bg-transparent border-0 border-bottom rounded-0"
              placeholder="Ime"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="form-control text-light border-secondary bg-transparent border-0 border-bottom rounded-0"
              placeholder="Email Adresa"
            />
          </div>
        <div className="mb-4">
          <textarea
            className="form-control text-light border-secondary bg-transparent border-0 border-bottom rounded-0"
            placeholder="Tekst"
            rows={5}
          />
        </div>
        <button
          type="submit"
          className="btn myCustomBtn mt-3 mt-lg-5 mx-auto"
        >
          Pošalji
        </button>
      </form>
    );
}