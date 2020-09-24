import React, { useState, useEffect } from 'react'
import Poutine from './Poutine'

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

  const list: JSX.Element[] = poutines.map( item => {
    console.log(typeof(item.attributes))
    return(<Poutine key={item.attributes.name} attributes= {item.attributes} />)
    
  })

  return (
    <div className="home">
      <div className="header">
        <h1> Poutines </h1>
        <div className="subheader">Honest Poutine Reviews.</div>
      </div>
      <div className="list">
        <ul>{list}</ul>
      </div>
    </div>
  )}

export default Poutines
