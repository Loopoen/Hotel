import React from 'react'
import Star from "../assets/star.svg"
import StartOutLine from "../assets/star-outline.svg"

const StarRating = ({rating = 4}) => {
  return (
    <>
        {
            Array(5).fill('').map((_, index)=>(
                <img src={rating > index ? Star: StartOutLine  } className='w-5 h-5'/>
            ))
        }

    </>
  )
}

export default StarRating