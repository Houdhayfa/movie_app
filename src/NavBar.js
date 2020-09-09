import React,{useState,useEffect} from 'react';
import StarRating from './StarRating'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function NavBar(props) {
    const [input,setInput]=useState('')
    const handelChange=(e)=>{
        setInput( e.target.value)
        
    }
    const handeSubmit=(e)=>{
        props.filterMovie(input)
        e.preventDefault()
    }
   
    
return (
    <nav className="nav navbar navbar-light bg-light">
        <form onSubmit={handeSubmit} className="form-inline">
            <input 
                id="searchInput"
                value={input}
                className="form-control mr-sm-2"
                type="search"
                placeholder="search by name..."
                aria-label="Search"
                onChange={handelChange}
                 >
            </input>
            <StarRating filterMoviesByRating={props.filterMoviesByRating}
                        input={input}
                        rating={props.rating}
                        setRating={props.setRating}/>
            <button className="navbutton btn btn-outline-primary my-2 my-sm-0" 
                    type="submit">
                Search
            </button>
            <button onClick={props.showAdd} 
                    className="navbutton btn btn-outline-primary my-2 my-sm-0" 
                    type="submit">
                Add Movie
            </button>
            
        </form>
        
    </nav>
    )
}

export default NavBar
