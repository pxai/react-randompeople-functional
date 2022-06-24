import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10').then(data => {
      return data.json()
    }).then(json => {
      console.log('Let see: ', json.results)
      this.setState({people: json.results})
    })
  }

  render () {
    return (
      <div className="App">
        <h1>People API</h1>
        { 
          this.state.people.map((person) => {
            return <div key={person.login.uuid}>{person.name.title } {person.name.first}</div>
          })
        }
      </div>
    );
  }

}

export default App;
