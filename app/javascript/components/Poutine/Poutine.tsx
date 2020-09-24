import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
  background: white;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: black;
  }
`
const Main = styled.div`
  padding-left: 50px;
`


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
  <Wrapper>
    <Column>
      <Main>
        { 
          loaded && 
          <Header
            attributes={poutine.data.attributes}
            reviews={poutine.included}
          />
        }
        <div className="reviews"></div>
      </Main>
    </Column>
    <Column>
      <div className="review-form">Review Form Goes here</div>
    </Column>
  </Wrapper> )
}

export default Poutine
