import {ReactComponent as IconTehZastita} from '../../Assets/icons/emergency.svg';

export default function TehnickaZastita() {
    return (
      <article className="uslugeTehZastita w-100">
        <div className="container-md">
          <section className="py-3 row d-flex flex-column flex-md-row justify-content-between align-items-center">
            <article className="tehZastitaHeader d-flex flex-column justify-content-center align-items-center mb-5">
              <IconTehZastita className="tehZastitaIcon" />
              <div className="">
                <h4 className="text-center mb-4 fs-1 ">Tehnicka Zastita</h4>
                <p className="fs-4">
                  Tehnička zaštita uključuje alarmne sisteme, video nadzor i
                  kontrolu pristupa za potpunu sigurnost vašeg objekta. Takođe
                  nudimo interfonske i video-interfonske sisteme, kao i
                  daljinsko otvaranje vrata i kapija, omogućavajući vam potpunu
                  kontrolu pristupa.
                </p>
              </div>
            </article>
          </section>
        </div>
      </article>
    );
}