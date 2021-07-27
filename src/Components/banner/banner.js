import React, { useEffect, useState } from 'react';
import axios from '../../axios';
//import {SimpleImageSlider as Slider} from 'react-simple-image-slider'
import { API_KEY, IMAGE_URL } from '../../constants/constants';
import { topPopularity } from '../optimize/validation';
import './banner.css';

const Banner = () => {

    const [Movie, setMovie] = useState();

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then(response => {
            let data = topPopularity(response.data.results);
            setMovie(data[0]);
        }).catch(error => {
            console.log("error");
        })
    },[])

    return (
        <div
        style={{backgroundImage: `url(${Movie ? IMAGE_URL + Movie.backdrop_path : ""})`}}
        className={Movie ? 'banner' : 'loader'}
       >
             <div className='content'>
                 <h1 className='title'>{Movie ? Movie.title : ""}</h1>
                {
                    Movie ?
                    <div className='buttons'>
                        <button className='button'>Play</button>
                        <button className='button'>My List</button>
                    </div>
                    :
                    ''
                 }
                 <h1 className='description'>{Movie ? Movie.overview : "" }</h1>
             </div>
        </div>
    )
}

export default Banner;
