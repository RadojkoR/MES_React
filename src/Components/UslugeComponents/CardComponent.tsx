

interface CardComponentProps {
    usluge:{
        title: string,
        body: string,
        class: string    
    }
}

export default function CardComponent({usluge}: CardComponentProps) {
    return (
      <article className={`${usluge.class} cardComponent container-md d-flex flex-column justify-content-center align-items-center`}>
        <h5 className="fs-1 my-5 ">{usluge.title}</h5>
        <div className="row align-items-center">
          <p className="fs-4 pb-5 p-md-5">
            {usluge.body}
          </p>
        </div>
      </article>
    );
}