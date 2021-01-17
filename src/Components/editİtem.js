import axios from 'axios';
import React, { Component } from 'react'
import { AiFillHome } from "react-icons/ai";
import {Link} from "react-router-dom";


 class Edititem extends Component {
  
    state={
        İtem:"",
        color:"",
        img:"",
        price:""
    }

   async componentDidMount(){
       
       const İd=this.props.match.params.id
      
      
      const response= await axios.get(`http://localhost:3004/items/${İd}`);
    
     const myitem =response.data;
     this.setState(
         {
             İtem:myitem.İtem,
             color:myitem.color,
             img:myitem.img,
             price:myitem.price

         }
     )
    }

    

     Edit=(e)=>{
console.log(e.target.name);

 const newEdit=e.target.value
  this.setState({
   [e.target.name]:newEdit
 })  

     }


     handleSubmit = (event)=>{
        event.preventDefault();
        const {İtem,color,img,price} =this.state;
        const id=this.props.match.params.id
    const Updatedİtem = {
        İtem,
        color,
        img,
        price
    }
    this.props.onEditİtem(id,Updatedİtem)
    this.props.history.push("/");
}



  render() {
    return (
        
        <div className="container">
          
        <form className="mt-5" onSubmit={this.handleSubmit}>
        <Link  to="/" className="btn btn-danger mt-5"><AiFillHome/></Link >
        <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled/>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName" ></label>
                        <input  type="text" 
                                className="form-control" 
                                name="İtem"
                                value={this.state.İtem}
                                onChange={this.Edit}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating" >Color</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="color" value={this.state.color}
                                onChange={this.Edit}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputImage" >Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="img"
                                value={this.state.img}
                                onChange={this.Edit}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea" >Price</label>
                        <textarea 
                                className="form-control" 
                                name="price" rows="1"
                                value={this.state.price}
                                onChange={this.Edit}></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Edit İtem" />
        </form>
    </div>
        
      
    )
  }
}

export default Edititem ;