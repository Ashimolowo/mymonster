import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import Searchbox from './components/search/search-box.component.jsx';
import "./App.css";

class App extends Component {

  state = {
    monsters: [], 
    searchField: ''
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users }); 
        console.log(users); 
      })
      .catch(error => console.error('Error fetching users:', error));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <Searchbox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}
export default App; 