import Reviews from '../Reviews/Reviews'
import TeamMemberCard from '../TeamMember/TeamMemberCard'
import { TeamMember } from '../types/data'
import { teamMembers } from '../data/teamMembers'
import './Landing.css'

interface ReasonProps {
  handleSetReason: (reason: string) => void
}

const Landing = (props: ReasonProps): JSX.Element => {

  const {handleSetReason} = props



  return (
    <div className="page">

      <section className="hero landing">
          <h1>Welcome</h1>

          <section className='reason-for-visit'>
            <a href='#footer' onClick={() => handleSetReason(`I'm a New Patient!`)} className='book'>New Patient</a>
            <a href='#footer' onClick={() => handleSetReason(`I'd like a Free Invisalign Consult!`)} className='book'>Free Invisalign Consult</a>
            <a href='#footer' onClick={() => handleSetReason(`I'd like a Free HealthyStart Consult!`)} className='book'>Free HealthyStart Consult</a>
          </section>

      </section>

      <div id='meet-the-team'>
        
        <div id='docs'>
          <div className='doc-card'>
            <img className='doc-headshot' src="headshots/mabe-headshot.jpeg" alt="mabe" />
            <p className='doc-text'>Dr. Hannah Mabe came to the Valley from Patrick County, in southern Virginia. She received a Bachelor of Science in chemistry from the University of Virginia. Dr. Mabe pursued her dental education at Virginia Commonwealth University School of Dentistry, where she received her Doctor of Dental Surgery degree. After graduation, Dr. Mabe completed a General Practice Residency at The Ohio State University in Columbus, Ohio, where she gained additional training in surgery, medically complex cases, and treatment of special needs and pediatric patients.</p>
          </div>
          <div className='doc-card'>
            <img className='doc-headshot' src="headshots/hutchins-headshot.jpeg" alt="hutchins" />
            <p className='doc-text'>Dr. James Hutchens was born and raised in Waynesboro, Virginia. He received a Bachelor of Science in biology from James Madison University. Dr. Hutchens pursued his dental education at the Medical College of Virginia/Virginia Commonwealth  University School of Dentistry, where he received his Doctor of Dental Surgery degree. MCV is one of the best known and most distinguished dental institutions in the southeastern United States.</p>
          </div>
        </div>

        <div id='team'>
          {teamMembers.map((member:TeamMember) => 
            <TeamMemberCard key={member.name} member={member}/>
          )}

        </div>



      </div>
          <Reviews />

    </div>
  )
}

export default Landing