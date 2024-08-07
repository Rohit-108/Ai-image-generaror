import React, { useState } from 'react';
import  {useRef} from "react";
import './ImageGenerator.css';
import default_image from "../assets/default_image.jpeg";


const ImageGenerator = () =>
{
    const [image_url, setImage_url] = useState("/")
    let inputRef = useRef(null);
  
    const ImageGenerator = async () =>{
        if(inputRef.current.value===""){
            return 0;
        }
        const response= await fetch=""
    }



    return (
        <div className='ai-image-generator'>
            <div className='header'>Ai image <span>generator</span></div>
            <div className='img-loading'>
            <div className='image'>
            <img src={image_url==="/"?default_image:image_url} alt=" " />
            </div>
            </div>
            <div className="search-box">
                <input type="text" ref={inputRef} className='search-input ' placeholder='Describe what you want to say' />
                <div className='generate-btn' >Generate</div>
            </div>
        </div>
    )
}

export default ImageGenerator;