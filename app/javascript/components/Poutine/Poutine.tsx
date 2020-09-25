import React, { useState, useEffect, Fragment, EventHandler } from 'react'
import axios from 'axios'
import Header from './Header'
import { RouteComponentProps } from 'react-router-dom';
import ReviewForm from './ReviewForm'


type MyProps = RouteComponentProps<{slug:string}>

const Poutine: React.FC<MyProps> = ({ match }) => {
  const [poutine, setPoutine] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect( () => {
    // api/v1/poutines/la-banquise

    const slug = match.params.slug
    const url = `/api/v1/poutines/${slug}`

    axios.get(url)
      .then( resp => {
        setPoutine(resp.data)
        setLoaded(true)
      })
      .catch( resp => console.log(`error ${resp}`))
  }, []) 

  const handleChange = (e: Event) => {
    e.preventDefault()
    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    console.log('review:', review)
  }

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const csrfToken  = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const poutine_id = poutine.data.id
    axios.post('/api/v1/reviews', {review, poutine_id})
      .then( resp => { 
        const included = [...poutine.included, resp.data]
        setPoutine({...poutine, included})
        setReview({title: '', description: '', score: 0})
      })
      .catch( resp => {})
  }
  return ( 
  <div className="wrapper">
  {
    loaded && <Fragment>
    <div className="column">
        <Header 
          attributes={poutine} 
        />
    </div>
    <div className="reviews"></div>
    <div className="column">
      <div className="review-form">
        <ReviewForm 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          attributes={poutine.data.attributes}
          review={review}
        />
      </div>
    </div>
  </Fragment>
  } </div>
  )
      
}

export default Poutine
