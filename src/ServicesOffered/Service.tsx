import './Services.css'

import { ServiceCategory } from "../types/data"

interface ServiceProps {
  service: ServiceCategory;
}

const ServiceOffered = ({service}: ServiceProps) : JSX.Element => {

  const name = service.name.toUpperCase()

  return (
    <article id={name} className={service.position}>
      <div className='service-info'>
        <h2>{name}</h2>
        <ul>
          {service.services.map(s => 
            <li>{s}</li>
          )}
        </ul>
        {service.methods &&
        <>
          <ul className='methods'>
            {service.methods.map(m => 
              <li>{m}</li>
            )}
          </ul>
        </>
        }

      </div>
      <div className='image'>

      </div>


    </article>
  )
}

export default ServiceOffered