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
            <a href={`#${s}`}><li key={s}>{s}</li></a>
          )}
          {service.methods &&
          <>
            <ul className='methods'>
              {service.methods.map(m => 
                <li key={m}>- {m}</li>
              )}
            </ul>
          </>
          }
        </ul>

    </article>
  )
}

export default ServiceOffered