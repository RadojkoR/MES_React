

export default function Maps(){
    return (
      <div className="row container-md mx-auto">
        <div className="col-6 d-flex flex-column align-items-center">
          <h3 className="mb-4">Čačak</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3441.2758225390558!2d20.3335311!3d43.8798018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475772306362bc5d%3A0x4fe115ea75f2816e!2sJezdinsko%20polje%20potes%2011%2C%20%C4%8Ca%C4%8Dak%2C%20Serbia!5e1!3m2!1sen!2sca!4v1728961197248!5m2!1sen!2sca"
            width="450"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa lokacije Jezinsko polje, Čačak"
          ></iframe>
        </div>
        <div className="col-6 d-flex flex-column align-items-center">
          <h3 className="mb-4">Beograd</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6766.588544157681!2d20.4611986!3d44.87474290000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a649bb2a3bea9%3A0x5fa69d23883c9ee3!2sIvana%20Milutinovi%C4%87a%2047%2C%20Beograd%2C%20Serbia!5e1!3m2!1sen!2sca!4v1728962086142!5m2!1sen!2sca"
            width="450"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa lokacije Ivana Milutinovića 47, Beograd"
          ></iframe>
        </div>
      </div>
    );
}