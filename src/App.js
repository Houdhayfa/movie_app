import React,{useState} from 'react';
import NavBar from './NavBar'
import AddMovie from './AddMovie'
import MovieList from './MovieList'
import './stranger.ttf'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  const defaultData=[
    {name:'Jumanji',
    id:1,
    rating:2,
    imageUrl:'./img/jumanji.jpg',
    date:1995
          },
    {name:'Mulan',
    id:2,
    rating:2,
    imageUrl:'./img/mulan.jpg',
    date:1998
          },
    {name:'The Batman',
    id:3,
    rating:4,
    imageUrl:'./img/The Batman.jpg',
    date:2021
          },
    {name:'Batman Begins',
    id:4,
    rating:5,
    imageUrl:'./img/Batman Begins.jpg',
    date:2005
          },
    {name:'Expendables',
    id:5,
    rating:5,
    imageUrl:'./img/expendables.jpg',
    date:2010
          },
    {name:'Die Hard 3',
    id:6,
    rating:3,
    imageUrl:'./img/die.jpg',
    date:1995
          }                             
  ]
                           /* State*/

const [data, setData]=useState(defaultData)
const [movieList, setMovieList]=useState(data)
const [rating,setRating]=useState(0)
const [isAddDisplayed,setAddDisplay]=useState(false)

                /* Callback functions from children*/

const filterMoviesByName=(input)=>{
setMovieList( data.filter((movie)=>(
  movie.rating>=rating)&&(movie.name.toLowerCase().includes(input.toLowerCase()))))
}
const filterMoviesByRating=(rating,input)=>{
  setMovieList( data.filter(movie=>(
    movie.rating>=rating)&&(movie.name.toLowerCase().includes(input.toLowerCase()))))
  }
const insertMovie=(movieInfos)=>{
  const setNewmovie=prevState=>(
    [...prevState,{
      name:movieInfos.inputName,
      id:prevState[prevState.length-1].id+1,
      rating:movieInfos.inputRating,
      imageUrl:movieInfos.inputImgUrl,
      date:movieInfos.inputYear
    }]);
  setMovieList(setNewmovie);
  setData(setNewmovie);
}
const showAdd=()=>{
  setAddDisplay(!isAddDisplayed)
}

  return (
    <div className="App">
        <header>
          <h1 id="title">Movie App GoMyCode</h1>
        <NavBar showAdd={showAdd} 
                className="nav" 
                filterMovie={filterMoviesByName} 
                filterMoviesByRating={filterMoviesByRating}
                rating={rating}
                setRating={setRating} />
        </header>
        <main>
        <AddMovie showAdd={showAdd} isAddDisplayed={isAddDisplayed} insertMovie={insertMovie} />
        <MovieList movieList={movieList} data={data}/>
        </main>
    </div>
  )
}

export default App
