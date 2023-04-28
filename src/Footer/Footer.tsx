import './Footer.css'
import {useState, useEffect} from 'react'
import {send} from 'emailjs-com'

import { messageFormData } from '../types/forms'


interface FooterProps {
  handleSetReason: (reason: string) => void;
  reason: string;
  fb: string;
  ig: string;
}

const Footer = (props: FooterProps) : JSX.Element => {

  const {reason, handleSetReason, fb, ig} = props

  const [submitted, setSubmitted] = useState<boolean>(false)

  const [formData, setFormData] = useState<messageFormData>({
    fullName: '',
    email: '',
    description: ''
  })

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    send(
      'service_ru2x9ln',
      'template_llajt2t',
      formData,
      'zoVY__QB8gbvphTu-'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    setFormData({
      fullName: '',
      email: '',
      description: ''
    })
    setSubmitted(true)
    handleSetReason('')
  }
  
  useEffect((): void => {
    setFormData({ ...formData, description: reason})
  }, [reason])
  
  return (
    <section id='footer'>
      <div id='message-map'>
        <article id='message'>
          <div>
            <img src="/Logo1.png" alt="" />
            <h2>Book a Visit</h2>
            <p>Submit this form, and our office will reach out to set up an appointment!</p>
          </div>
          <div id='message-form'>
            <form 
              autoComplete='off'
              onSubmit={handleSubmit}
              >
              <input 
                type="text"
                id='full-name-input'
                placeholder='Full Name'
                name='fullName'
                onChange={handleChange}
                value={formData.fullName}
                />
              <input 
                type="text" 
                placeholder='Email'
                name='email'
                onChange={handleChange}
                value={formData.email}
                />
              <textarea 
                // type="text" 
                placeholder='Reason for Visit'
                name='description'
                onChange={handleChange}
                value={formData.description}
                />
              <button>Send Request</button>
            </form>
            {submitted && <p>Your message has been sent. Keep an eye out for a confirmation email!</p>}
          </div>
        </article>

        <article id='map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.4601068508564!2d-79.03068549999999!3d38.0363642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b35d951c01088d%3A0x12edc8cfaca9943e!2sLong%20Ridge%20Dentistry!5e0!3m2!1sen!2sus!4v1680888824252!5m2!1sen!2sus" width="400" height="300" loading="lazy"></iframe>
        </article>
      </div>
      <div id='links'>
        <p><a href={fb} target='_blank'><img src="/Instagram.png" alt="ig" /></a></p>
        <p><a href={fb} target='_blank'><img src="/Facebook.png" alt="fb" /></a></p>
        <a href='tel:+15403372400'>(540)337-2400</a>
        <a href="https://www.google.com/maps/place/Long+Ridge+Dentistry/@38.0363684,-79.0328795,17z/data=!3m1!4b1!4m6!3m5!1s0x89b35d951c01088d:0x12edc8cfaca9943e!8m2!3d38.0363642!4d-79.0306855!16s%2Fg%2F1tk23tm5" target='_blank'>2780 Stuarts Draft Hwy, Ste 102</a>
      </div>
    </section>
  )
}

export default Footer