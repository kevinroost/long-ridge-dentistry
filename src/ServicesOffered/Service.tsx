import './Services.css'

import { ServiceCategory } from "../types/data"

interface ServiceProps {
  service: ServiceCategory;
}

const ServiceOffered = ({service}: ServiceProps) : JSX.Element => {

  const name = service.name.toUpperCase()

  return (
    <article id={name} className='service-list'>

        <h1>{name}</h1>
        <ul>
          {service.services.map(s => 
            <li>{s}</li>
          )}
          {service.methods &&
          <>
            <ul className='methods'>
              {service.methods.map(m => 
                <li>- {m}</li>
              )}
            </ul>
          </>
          }
        </ul>

    </article>
  )
}

export default ServiceOffered