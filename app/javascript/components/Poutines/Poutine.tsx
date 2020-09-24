import React from 'react'
import {Link} from 'react-router-dom'

interface attrib {
  name: string,
  image_url: string,
  avg_score: number,
  slug: string
}

const Poutine = (props: {attributes: attrib}) => {
  console.log(props.attributes)
  return (
    <div className="card">
      <div className="poutine-logo">
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </div>
      <div className="poutine-name">
        {props.attributes.name}
      </div>
      <div className="poutine-score">
        {props.attributes.avg_score}
      </div>
      <div className="poutine-link">
        <Link to={`/poutines/${props.attributes.slug}`}> {props.attributes.name} </Link>
      </div>
    </div>
  )
}

export default Poutine

