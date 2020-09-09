import React,{useState,useEffect} from 'react'
import {FaStar} from 'react-icons/fa'
import './StarRating.css'

function StarRating(props) {
    
    const [isStarTouched,setHover]=useState(0)
    useEffect(()=>{
        props.filterMoviesByRating(props.rating,props.input);
        
    },[props.rating])

    
    return(
   <div className="ratingContainer">
       {[...Array(5)].map((item,i)=>{
         return (
         <label>
             <input type="radio"
                    value={i+1}
                    key={i} 
                    onClick={()=>{ 
                      props.setRating(i+1); 
                                  
                                  }} >
             </input>
             <FaStar size={20}key={i+1}  
                     className={`star ${(isStarTouched||props.rating)>=i+1?"shinyStar":""}`}
                     onMouseEnter={()=>setHover(i+1)}
                     onMouseLeave={()=>setHover(0)} />
         </label>
                )
        })}
 </div>
    )}


export default StarRating
