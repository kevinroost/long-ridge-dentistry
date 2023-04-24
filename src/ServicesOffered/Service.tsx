import './Services.css'

import { ServiceCategory } from "../types/data"

interface ServiceProps {
  service: ServiceCategory;
}

const ServiceOffered = ({service}: ServiceProps) : JSX.Element => {

  const name = service.name

  return (
    <article id={name} className={service.position}>
      <div className='service-info'>
        <h2>{name}</h2>
        <p>{service.description}</p>
      </div>
      <div className='image'>

      </div>


    </article>
  )
}

export default ServiceOffered