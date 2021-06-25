import React, { Fragment, useContext, useEffect, useState } from 'react';
import './App.css';
import  {Store} from './store'



function App() {
const {state , dispatch} =   useContext(Store);



  useEffect(()=>{
    state.episodes.length === 0 && fetchDataAction()
  })



  const fetchDataAction=async ()=>{
   const URL = `https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`;

    const data = await fetch(URL);
        const dataJSON = await data.json();

    return dispatch({

     
      type : 'FETCH_DATA',
      payload : dataJSON._embedded.episodes
    })
  }
  console.log(state);
  return (
    <Fragment>   
      
    <div className="App">
     <h1>Rick and Morty</h1>
     <p> Site for pick episode for rick and morty</p>
    </div>
    </Fragment>

  );
}

export default App;
