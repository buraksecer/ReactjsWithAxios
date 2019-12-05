import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'http://jsonplaceholder.typicode.com'; 
class App extends Component {

  state = {
    users: [],
    id: ''
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

  handleSubmit = event => {
    event.preventDefault();  
     console.log(`${this.state.id}`); 
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
      <button onClick={this.handleGetAllDataClick}>
        GET DATAS
      </button> 
      <div className="col-xs-8">
      <h1>React Axios Example</h1>
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
      </div> 
     </div>
    );
  }
}
export default App;