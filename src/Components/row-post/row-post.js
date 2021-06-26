import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import {API_KEY, IMAGE_URL } from '../../constants/constants';
import Youtube from 'react-youtube';
import './row-post.css';

const RowPost = ({title,isSmall,url}) => {

    const [Post, setPost] = useState([]);
    const [UrlId, setUrlId] = useState('');

    useEffect(() => {
        axios.get(url).then((response) => {
             setPost(response.data.results);
        })
    },[url])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };

    const handleVideo = (id) => {

        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if(response.data.results.length !== 0)
            {
                setUrlId(response.data.results[0]);
            }
            else{
                console.log(' Not Found !!!');
            }
        }).catch(error => {
            console.log("error")
        })
    }

    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className="posters">
               { 
                  Post.map((item) => <img onClick={() => handleVideo(item.id)} className={ isSmall ? 'small-poster' : 'poster'} key={item.id} src={ Post ? IMAGE_URL + item.backdrop_path : ""} alt='poster-pic'/>)
               }
            </div>
            {
               UrlId && <Youtube className="youtube" opts={opts} videoId={UrlId.key} />
            }
        </div>
    )
}

export default RowPost; 
