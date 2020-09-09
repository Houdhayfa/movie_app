import React from 'react'
import {FaStar} from 'react-icons/fa'
function Item(props) {
  const stars=[...Array(parseInt(props.rating))].map((item,i)=>{
                  return <FaStar key={i} className="shinyStar"/>})
    return (
        <div className="movie">
           <div className="card" >
  <img src={props.imageUrl} className="poster card-img-top" alt="Not found"></img>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Year: {props.date}</li>
    <li className="list-group-item">
      Rating:{stars}
      </li>
  </ul>
  
</div>
       </div>
    )
}

export default Item
/* [...Array(props.rating)].map((item)=>{return <FaStar className="shinyStar"/>}) */