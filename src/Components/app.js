

import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import Searchbar from "./searchbar";
import Card from "./shopcard";
import Carou from "./Carousel";
import Additem from "./additem";
import Edititem from "./editİtem";
import Basket from "./basket";






class App extends React.Component {

  state = {
    items: [],
    searchCard: "",
}

  

İtemadd=async (card)=>{
  const latestitem=this.state.items.filter(
    m=>m.id === card.id
  )

  this.setState(state =>({
    items:latestitem
  })
  )
    
}



  async componentDidMount() {
   this.getİtems();

  }

  async getİtems() {
    const response = await axios.get("http://localhost:3004/items");
  
    this.setState({ items: response.data })
   

  }
//ADD
addİtems = async (card) =>{
  await axios.post(`http://localhost:3004/items/`,card)
  this.setState( state=>({
    items:state.items.concat([card])
  }))
}


//Edit
editİtems = async (id,card) =>{
  await axios.put(`http://localhost:3004/items/${id}`,card);
  this.getİtems();
  
  
}





  //DELETE

  deleteitem = async (card) => {
    axios.delete(` http://localhost:3004/items${card.id}`)
    const newMovieList = this.state.items.filter(
      m => m.id !== card.id
    )
    this.setState(state => ({
      items: newMovieList
    }
    )
    )
  }


  
//SEARCH
  searchme = (event) => {
    console.log(event.target.value)
    this.setState({ searchCard: event.target.value })
  }



  render() {

    let filtereditem = this.state.items.filter(
      (item) => {
        return item.İtem.toLowerCase().indexOf(this.state.searchCard.toLowerCase()) !== -1
      }
    ).sort((a,b)=>{
        
      if(a.id > b.id){
          return -1
      }

      else if(a.id < b.id){
        return 1
      }
      }
    )
    return (
      <Router>
        <div className="container">
          <div className="container-fluid bg-danger">
            <div className="row carousel-bg">
              <div className="col-4 offset-4 ">
                <Carou />
              </div>
            </div>
          </div>
          <div className="container-fluid bg-danger">
            <div className="d-flex flex-row-reverse">
            </div>
          </div>
          <Switch>
          <Route path="/" exact  render={()=>(
            <React.Fragment>
          <Searchbar searchİtem={this.searchme} />
          <div className="container">
            <Card
              items={filtereditem}
              delete1={this.deleteitem}
              add={this.additem}
            />
          </div>
          </React.Fragment>
               )}>
          </Route>
          <Route path="/add" exact  render={(history)=>(
             
            <Additem 
            propsaddİtem={(card)=>{this.addİtems(card)
            history.push("/")
            }}
           
            />
            )
            } />

            
            <Route path="/edit/:id" exact  render={(props)=>(
            
             <Edititem 
             {...props}
             onEditİtem={(id,card)=>{this.editİtems(id,card)
            
             }}
            
             />
             )
             } />


          <Route path="/shop">
            <Basket/>
          </Route>

          </Switch>
          </div>
        </Router>
    )

  }
}

export default App;