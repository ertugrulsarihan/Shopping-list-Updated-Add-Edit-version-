import React from "react";
import {Link} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"






class Searchbar extends React.Component{
state={
  searchCard:""
}

norefresh = (event)=>{
  event.preventDefault();
}



    render(){
return(
    
      <div className="container">
        <div className="row mb-5">
          <div className="col-10">
          <input
          onSubmit={this.norefresh}
          onChange={this.props.searchİtem} 
          type="text" 
          className="form-control" 
         placeholder="What are you looking for?"/>
        </div>
        <div className="col-1">
        <Link to="/add" style={{float:"right"}} className="btn btn-md btn-primary">Add
        </Link> 
         </div>
         <div className="col-1">
          <Link className="btn btn-success" type="button" to="/shop"> <FaShoppingCart/> </Link> 
         </div>

        </div>
        </div>
      
      
     
    
   

)
    }
}

export default Searchbar;