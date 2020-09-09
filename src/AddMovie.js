import React ,{useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function AddMovie(props) {
  const [input,setInput]=useState({
    inputName:"",
    inputYear:"",
    inputRating:"",
    inputImgUrl:""

  })
  const [errorRating,setErrorRating]=useState(false)
  const handelSubmit=(e)=>{
    if(input.inputRating>=1 &&input.inputRating<=5){
    e.preventDefault()
    props.insertMovie(input)
    setErrorRating(false)
    setInput({
      inputName:"",
      inputYear:"",
      inputRating:"",
      inputImgUrl:""
    })
    props.showAdd()}
    else {
      e.preventDefault()
      setErrorRating(true)}
  }
  const handelChange=(e)=>{ //handelChange for all inputs
    const{name, value}=e.target
    setInput(prevState=>{
      return(
        {...prevState,[name]:value }
      )
    } )
  }
  
  
    return (
        <form onSubmit={handelSubmit} className={`addmovie ${props.isAddDisplayed?"":"hidden"}`}>
            <h3>Insert  movie informations</h3>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1"> Title</label>
            <input name="inputName" type="text"
              className="form-control"
              
              placeholder="Please insert the movie name..."
              value={input.inputName} onChange={handelChange} ></input>
              
         </div>
         <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Year</label>
            
            <input name="inputYear" type="text"
              className="form-control"
              
              placeholder="Please insert the movie year..."
              value={input.inputYear}onChange={handelChange}  ></input>
              
         </div>
         <div className="form-group">
            <label className={errorRating?"error":""} htmlFor="exampleFormControlInput1">Rating</label>
            <input name="inputRating" type="number" min='1' max='5'
              className="form-control"
              placeholder="Please insert the movie rating..."
              value={parseInt(input.inputRating)} onChange={handelChange} ></input>
         </div>
         <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Image Url</label>
            <input name="inputImgUrl" type="text"
              className="form-control"
              placeholder="Please insert the poster path..."
              value={input.inputImgUrl} onChange={handelChange} ></input>
           </div>
           <div className="form-group">
            <label className="error" 
                   htmlFor="exampleFormControlInput1">
                     {errorRating?"Please insert a valid Rating":""}
            </label>
            
           </div>
          <button className="navbutton btn btn-outline-primary my-2 my-sm-0">Add</button>
          
        </form>
    )
}

export default AddMovie
