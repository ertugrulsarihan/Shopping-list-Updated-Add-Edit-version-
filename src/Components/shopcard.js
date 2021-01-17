import React,{useState}from "react"
import {Link} from "react-router-dom";




function Card(props){
const [state, setstate] = useState(["selam"])

return(
          <div className="row row-cols-1 row-cols-md-3 g-4">
                      {
                        props.items.map((card)=>(
                            
                            <div className=" col-10 offset-1" key={card.id}>
    <div className="card form-control" key={card.id} >
      <img src={card.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{card.İtem}</h5>
        <p className="card-text">{card.price}</p>
  <button className="btn btn-success" onClick={(event)=>props.add(card)}>Add</button>
  <button className="btn btn-danger " onSubmit={ (event)=>{event.preventDefault();}} onClick={(event)=>props.delete1(card)} >Delete</button>
  <Link to={`edit/${card.id}`} type="button" className="btn btn-primary">Edit</Link>
       
      </div>
    </div>
  </div>
 
                        ))
                    }
                
          </div>
          
        )
    }
export default Card;