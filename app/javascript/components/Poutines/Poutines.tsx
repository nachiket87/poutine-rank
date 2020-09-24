import React, { useState, useEffect, Fragment } from 'react'

const Poutines: React.FC = () => {
  const [poutines, setPoutines] = useState([])

  useEffect( () => {
    // get all poutines from API
    // Update poutine in our state
   fetch('/api/v1/poutines.json')
      .then( resp => resp.json())
      .then( data => {
        setPoutines(data.data)
      })
      .catch( resp => console.log(resp))
  }, [poutines.length])

  const list = poutines.map( item => {
    return(<li key={item.attributes.name}>{ item.attributes.name }</li>)
  })

  return (
    <Fragment>
      <div> This is the Poutines#Index view </div>
      <ul>{list}</ul>
    </Fragment>
  )}

export default Poutines
