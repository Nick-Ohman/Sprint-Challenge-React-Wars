import React, {useState, useEffect} from 'react';
import axios from "axios";
import Character from './components/Character'
import './App.css';
import styled from 'styled-components'


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const MainContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  margin:2%;
`;


const App = () => {

  const [starWars, setStarWars] = useState([])


  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/")
    .then(response => setStarWars(response.data.results))
    .catch(err => console.log(err, "error received"))
  }, []);


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <div className="starChar" >
        {starWars.map((item, idx) => (
          <Character key ={idx} cards={item} />
          ))}
      </div>
          
    </div>
  );
}

export default App;
