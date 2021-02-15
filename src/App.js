import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchField } from './components/search-field/search-field.component'
class App extends Component {
  
  constructor() {
    super();
    this.state = {
      cards: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({cards: users}));
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {cards, searchField} = this.state;
    const filteredCards = cards.filter(card => 
      card.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <SearchField
          placeholder='Search for a card'
          handleChange={this.handleChange}
        />
        <CardList cards={filteredCards} />
      </div>
    );
  }
}

export default App;
