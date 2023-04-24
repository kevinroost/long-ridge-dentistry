import './Services.css'

import { Service } from "../types/service"

interface ServiceProps {
  service: Service;
}

const ServiceOffered = ({service}: ServiceProps) : JSX.Element => {


  return (
    <article className={service.position}>
      <div className='service-info'>
        <h2>{service.name}</h2>
        <p>{service.description}</p>
      </div>
      <div className='image'>

      </div>


    </article>
  )
}

export default ServiceOffered