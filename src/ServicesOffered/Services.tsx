import './Services.css'

import { useState } from 'react'

import { services } from "../data/services"
import { ServiceCategory } from '../types/data'
import ServiceOffered from "./Service"

const Services = (): JSX.Element => {
  const [activeService, setActiveService] = useState(services[0])

  const handleSetActiveService = (service: ServiceCategory): void => {
    setActiveService(service)
  }

  return (
    <div className="page" id="services">
      <section className='hero'>
        <h1>Our Services</h1>
        <ul>
          {services.map(service => 
            
            <a href={`#${service.name.toUpperCase()}`} onClick={() => handleSetActiveService(service)}>{service.name}</a>
          )}
        </ul>
      </section>
      <section className="service-list">

        <ServiceOffered key={activeService.name} service={activeService}/>
        {/* {services.map(service =>

        )} */}
      </section>
    </div>
  )
}

export default Services