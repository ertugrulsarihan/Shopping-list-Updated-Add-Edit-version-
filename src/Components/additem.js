import React, { Component } from 'react'
import serialize from "form-serialize";
import { AiFillHome } from "react-icons/ai";
import {Link} from "react-router-dom";


 class Additem extends Component {
     handleSubmit = (event)=>{
         event.preventDefault();
         const newitem= serialize(event.target, { hash: true });
         
         this.props.propsaddİtem(newitem)
     }
  render() {
    return (
        
        <div className="container">
          
        <form className="mt-5" onSubmit={this.handleSubmit}>
        <Link  to="/" className="btn btn-danger mt-5"><AiFillHome/></Link >
        <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled/>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputName">İtem</label>
                        <input  type="text" 
                                className="form-control" 
                                name="İtem"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Color</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="color"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="img"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Price</label>
                        <textarea 
                                className="form-control" 
                                name="price" rows="1"></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Add İtem" />
        </form>
    </div>
        
      
    )
  }
}

export default Additem;