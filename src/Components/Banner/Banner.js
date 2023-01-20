import React, { useEffect, useState } from 'react';
import { API_KEY,IMAGE_URL } from '../../Constants/constants';
import './Banner.css';
import axios from '../../axios';


function Banner() {
  const [movie,setMovie]= useState();
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${ API_KEY }&language=en-US`).then((response)=>{
      
        let index = Math.floor(Math.random() * response.data.results.length);
        console.log(response.data.results[index]);
        setMovie(response.data.results[index]);
        
      })
    
    }, [])
    
    
  return (
  
    <div style={{backgroundImage:`url(${movie? IMAGE_URL+movie.backdrop_path:""})`
    }} className='banner'>
       
       <div className='content'>
        <h1 className='title'>{movie? movie.title : ""}</h1>
        <div className='banner_button'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie?movie.overview:""}</h1>
       </div>
       <div className='fade_bottom'>
           
       </div>
    </div>
  )
}

export default Banner