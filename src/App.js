import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/banner/banner'
import RowPost from './Components/row-post/row-post'
import {ORIGINALS_URL,ACTION_URL,COMEDY_URL,ROMANTIC_URL,HORROR_URL} from './urls';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost title='Netflix Originals' url={ORIGINALS_URL}/>
        <RowPost title='Action' url={ACTION_URL} isSmall/>
        <RowPost title='Comedy' url={COMEDY_URL} isSmall/>
        <RowPost title='Romantic' url={ROMANTIC_URL} isSmall/>
        <RowPost title='Horror' url={HORROR_URL} isSmall/>
    </div>
  );
}

export default App;
