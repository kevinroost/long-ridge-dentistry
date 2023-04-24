import { TeamMember } from "../types/data"

interface TeamMemberProps {
  member: TeamMember
}

const TeamMemberCard = ({member}: TeamMemberProps) : JSX.Element => {

  const image = `headshots/${member.name}.jpg`

  return (
    <article className='team-card'>
      <img src={image} alt="" />
      <p>{member.name}</p>
      <p>{member.position}</p>
    </article>
  )

}

export default TeamMemberCard