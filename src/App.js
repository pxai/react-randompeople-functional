import  { useState, useEffect, useCallback } from 'react';
import Person from './Person';
import SearchForm from './SearchForm';
import './App.css';
import axios from 'axios';

function App () {
  const [people, setPeople] = useState([]);
  const [gender, setGender] = useState();
  const [country, setCountry] = useState('US');
  
  const findPeople =  useCallback(async () => {
    const url = `https://randomuser.me/api/?results=10&gender=${gender}&nat=${country}`;
    const { data: { results } } = await axios.get(url);
    console.log("Get: ", url, gender, country)
    setPeople(results);
  }, [gender, country])

  useEffect(() => {
    findPeople();
  }, [gender, country, findPeople])



  const handleGender = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
  }

  const handleCountry = (event) => {
    setCountry(event.target.value);
  }

  return (
    <div className="App">
      <h1>Random People</h1>
      <div className="App-settings">
        <div>Gender: {gender || "all"}</div>
        <div>Country: {country}</div>
      </div>
      <SearchForm 
        handleGender={handleGender} 
        handleCountry={handleCountry}
        country={country}
      />
      <button onClick={findPeople}>Search again</button>
        { 
          people.map((person) => {
            return <Person key={person.login.uuid} person={person} />
          })
        }
    </div>
  );
}

export default App;
