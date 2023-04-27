import './Services.css'

import { useState } from 'react'

import { services } from "../data/services"
import { ServiceCategory } from '../types/data'

import ServiceOffered from "./Service"
import {Prevention, GenDent, Pedi, Perio, Ortho, Rest, Cosmetic, Airway, Tmj} from "./ServiceInfo"

interface ReasonProps {
  handleSetReason: (reason: string) => void
}

const Services = (props: ReasonProps): JSX.Element => {

  const {handleSetReason} = props

  const [activeService, setActiveService] = useState(services[0])

  const handleSetActiveService = (service: ServiceCategory): void => {
    setActiveService(service)
  }

  const servicesArr: React.ReactElement[] = [<Prevention/>, <GenDent/>, <Perio/>, <Pedi/>, <Ortho handleSetReason={handleSetReason}/>, <Rest/>, <Cosmetic/>, <Airway/>, <Tmj/>]

  
  
  return (
    <div className="page" id="services">
      <section className='hero'>
        <h1>Our Services</h1>
        <ul>
          {services.map(service => 
            
            <a key={service.name} href={`#${service.name.toUpperCase()}`} onClick={() => handleSetActiveService(service)}>{service.name}</a>
          )}
        </ul>
      </section>
      <section className="service-body">

        <ServiceOffered key={activeService.name} service={activeService}/>
        {servicesArr[services.indexOf(activeService)]}

      </section>
    </div>
  )
}

export default Services