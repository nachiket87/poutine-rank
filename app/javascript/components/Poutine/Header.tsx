import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  img {
    height: 150px;
    width: 150px;
    border-radius: 4px;
  }

  h1 {
    font-size: 30px;
  }
`
const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`
const TotalOutof = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`

const Header = (props) => {
  const {name, image_url, avg_score} = props.attributes
  const total = props.reviews.length
  return (
    <Wrapper>
      <h1>{name}</h1>
      <img src={image_url} alt={name} />
      <div> 
        <TotalReviews>{total} User Reviews</TotalReviews>
        <div className="starRating"></div>
        <TotalOutof>{avg_score} out of 5</TotalOutof>
      </div>

    </Wrapper>
  )
}

export default Header
