import React, { Fragment, useContext, useEffect, useState } from 'react';
import './App.css';
import  {Store} from './store'

interface IEpisode {
  airdate: string
airstamp: string
airtime: string
id: number
image: {medium: string, original: string}
name: string
number: number
runtime: number
season: number
summary:string
type: string
url: string
}


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
      value : dataJSON._embedded.episodes
    })
  }
  console.log(state);
  return (
    <Fragment>   
      <header className='header'> 
     <h1>Rick and Morty</h1>
     <p> Site for pick episode for rick and morty</p>
     </header >
       <section className='episode-layout'>
         {state.episodes.map((i : IEpisode)=>{
           return (
             <section key={i.id} className='episode-box'>
            <img src ={i.image.medium} />
            <h4><b>{i.name}</b></h4> 
            <b>Session : {i.season} Number : {i.number}</b>
           </section>
            )
         })}
       </section>
  
    </Fragment>

  );
}

export default App;
