import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'


const Poutine: React.FC = (props) => {
  const [poutine, setPoutine] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect( () => {
    // api/v1/poutines/la-banquise
    const slug = props.match.params.slug
    const url = `/api/v1/poutines/${slug}`

    axios.get(url)
      .then( resp => {
        setPoutine(resp.data)
        setLoaded(true)
      })
      .catch( resp => console.log(resp))
  }, [])
  return ( 
  <div className="wrapper">
    <div className="column">
      <div className="reviews"> WHY THE F</div>
    </div>
    <div className="column">
      <div className="review-form">Review Form Goes here</div>
    </div>
  </div> )
}

export default Poutine
