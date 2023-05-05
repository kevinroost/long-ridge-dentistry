
import { reviews } from "../data/reviews"
import { Review } from "../types/data"
import ReviewCard from "./ReviewCard"

import './review.css'

const Reviews = () : JSX.Element => {



  return (
    <section className="reviews">
      {reviews.map((review: Review, idx) => 
        <ReviewCard key={idx} review={review} />

      )}
    </section>
  )
}


export default Reviews