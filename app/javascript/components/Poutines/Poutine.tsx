import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

interface attrib {
  name: string,
  image_url: string,
  avg_score: number,
  slug: string
}

const Card = styled.div`
 justify-content: center;
 border: 1px solid #efefef;
 background: white;
`
const Poutineimage = styled.div`
 width: 50px;
 margin: 10px auto;

 img {
  height: 50px;
  width: 50px;
  border: 1px solid #efefef;
 }
`
const Poutinename = styled.div`
  padding: 20px 0 10px 0;
`
const Linkwrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: white;
    background: black;
    text-decoration: none;
    border-radius: 4px;
    padding: 1rem;
    border: 1px solid black;
  }
`



const Poutine = (props: {attributes: attrib}) => {
  console.log(poutine);
  return (
    <Card>
      <Poutineimage>
        <img src={props.attributes.image_url} alt={props.attributes.name} />
      </Poutineimage>
      <Poutinename>
        {props.attributes.name}
      </Poutinename>
      <div className="poutine-score">
        {props.attributes.avg_score}
      </div>
      <Linkwrapper>
        <Link to={`/poutines/${props.attributes.slug}`}> {props.attributes.name} </Link>
      </Linkwrapper>
    </Card>
  )
}

export default Poutine

