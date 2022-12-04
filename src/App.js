import { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';

function App() {
  const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=9fc0b4db7010ebe15f369cba0cf8d13a";
  const [movies,setMovies]=useState([]);

   useEffect(()=>{
     fetch(API_URL)
     .then((res)=>res.json())
     .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
   },[])

  return (
    <div>
      <h3>Display movies here now</h3>
      {movies.map((movieReq)=><MovieBox key={movieReq.id}{...movieReq}/>)}
    </div>
  );
}

export default App;
