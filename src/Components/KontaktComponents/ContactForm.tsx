
export default function ContactForm(){
    return (
      <form className="contactForm bg-dark text-secondary border-secondary p-5 my-5 d-flex flex-column">
       
          <div className="mb-4">
            <input
              type="text"
              className="form-control text-light border-secondary bg-transparent border-0 border-bottom rounded-0"
              placeholder="Name"
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
            placeholder="Poruka"
            rows={5}
          />
        </div>
        <button
          type="submit"
          className="btn myCustomBtn btn-lg mt-5 mx-auto"
        >
          Posalji
        </button>
      </form>
    );
}