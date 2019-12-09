import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'http://jsonplaceholder.typicode.com'; 
class App extends Component {

  state = {
    users: [],
    id: '',
    user:""
  }
  
  componentDidMount() {
    //This zone is loading before page render
  }
 
  handleGetAllDataClick = () => {
    const url = `${API_URL}/users/`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data }) 
     })
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }
  handleAddChange = event => {
    this.setState({ name: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();  
    
    const url = `${API_URL}/users/${this.state.id}`;
    axios.get(url).then(response => response.data)
    .then((data) => { 
      this.setState({ user: data }) 
     }) 
 
     const user = {
      name: this.state.name
     }  
     axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="container">

         <form onSubmit={this.handleSubmit}>
          <label> 
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">GET BY ID</button>
        </form> 
        <label>
            Get All Persons: 
          </label>
      <button onClick={this.handleGetAllDataClick}>
        GET DATAS
      </button> 

      <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleAddChange} />
          </label>
          <button type="submit">Add</button>
        </form>

      <div className="col-xs-8">
      <h1>React Axios Example User List</h1>
      {this.state.users.map((user) => (
        <div className="card">
         <div className="card-body">
             <h5 className="card-title">{user.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
            {user.email}             
            </h6>
          </div>
        </div>
      ))} 

      <div className="card">
         <div className="card-body">
             <h5 className="card-title">   {this.state.user.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
            {this.state.user.email}           
            </h6>
          </div>
        </div>   

      </div> 

     
        
      
     </div>
    );
  }
}
export default App;