
import React, {useEffect, useState} from 'react';
import {API_KEY,IMAGE_URL} from '../../Constants/constants'
import axios from '../../axios';
import './RowPost.css';
import Youtube from 'react-youtube';

function RowPost(props) {
  const [movies,setMovies] = useState([]);
  const [url,setUrl] = useState("");

  useEffect(() => {
   axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
    setMovies(response.data.results);
   }).catch(err=>{
    alert(err);
   })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
          if(response.data.results.length!==0){
            setUrl(response.data.results[0])
          }else{
            console.log("arrray legth 0")
          }
          

    })
  }

  return (
    <div className='row'>
        <h2 className=''>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
           <img onClick={()=>{handleMovie(obj.id)}}  className={props.isSmall?'smallPoster':'poster'} src={`${IMAGE_URL+obj.backdrop_path}`} alt=""/>

          )}

        </div>
       { url && <Youtube opts={opts} videoId={url.key} /> }
    </div>
  )
}

export default RowPost