import React from 'react';
import Item from './Item'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function MovieList(props) {
    return (
        <div className="list" >
            {props.movieList.map((item,i)=>{
                return(
                <Item name={item.name}
                      id={i+1}
                      rating={item.rating}
                      imageUrl={item.imageUrl}
                      date={item.date}
                      key={i+1} />)
            } )}
        </div>
    )
}

export default MovieList
