import './Services.css'

import { services } from "../data/services"
import ServiceOffered from "./Service"

const Services = (): JSX.Element => {


  return (
    <div className="page" id="services">
      <section className='hero'>
        <h1>Our Services</h1>
        <ul>
          {services.map(service => 
            
            <a href={`#${service.name}`}>{service.name}</a>
          )}
        </ul>
      </section>
      <section className="service-list">

        {services.map(service =>
          <ServiceOffered key={service.name} service={service}/>

        )}
      </section>
    </div>
  )
}

export default Services