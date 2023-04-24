import './review.css'



import { Review } from "../types/data"

interface ReviewProps {
  review: Review
}

const ReviewCard = ({review}: ReviewProps) : JSX.Element => {

  const ratingOptions: [ 1, 2, 3, 4, 5 ] = [ 1, 2, 3, 4, 5 ]

  return (
    <a href='https://www.google.com/maps/place/Long+Ridge+Dentistry/@38.036364,-79.030685,16z/data=!4m18!1m9!3m8!1s0x89b35d951c01088d:0x12edc8cfaca9943e!2sLong+Ridge+Dentistry!8m2!3d38.0363642!4d-79.0306855!9m1!1b1!16s%2Fg%2F1tk23tm5!3m7!1s0x89b35d951c01088d:0x12edc8cfaca9943e!8m2!3d38.0363642!4d-79.0306855!9m1!1b1!16s%2Fg%2F1tk23tm5?hl=en' target='_blank' className='review'>
      <h4>{review.name}</h4>
      <section className='stars'>
        {ratingOptions.map((rating: number): JSX.Element => (
          <p key={rating}>
            <img src="src/assets/Images/gold-star.png" alt="" />
          </p>
        ))}
      </section>
      <p>{review.review}</p>
    </a>
  )
}

// <img
//   id={rating.toString()}
//   key={rating}
//   src={rating <= review.rating ? star : noStar}
//   alt="Bean Symbol"
// />
export default ReviewCard