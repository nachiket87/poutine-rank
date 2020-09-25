import React, { Fragment } from 'react'
import styled from 'styled-components'

const ReviewForm = (props) => {
  const ratingOptions = [5,4,3,2,1].map( (score, index) => {
    return ( 
      <Fragment>
        <input type="radio" value={score} name="rating" onChange={ () => console.log('selected', score) } id={`rating-${score}`} key={index}/>
        <label></label>
      </Fragment>
    )
  })
  return ( 
    <div className="wrapper">
    <form onSubmit={props.handleSubmit}>
        <h2> Share your review for {props.attributes.name}</h2>
        <div> </div>
        <div className="field">
          <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="review title" />
        </div>
        <div className="field"><input onChange={props.handleChange} type="text" value={props.review.description} name="description" placeholder="review description" /></div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Rate this Poutine</div>
            { ratingOptions } 
          </div>
        </div>
        <button type="submit"> Submit review </button>

      </form>
    </div>
  )
}

export default ReviewForm
