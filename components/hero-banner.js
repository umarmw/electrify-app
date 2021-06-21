import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { MOB_BANNER_IMAGE_URL, DESK_BANNER_IMAGE_URL } from '../lib/constants';
import { IoMdArrowDroprightCircle } from 'react-icons/io';

const HeroBannerStyle = styled.div`

    width: 100%;
    position: relative;

    @media only screen and (min-width: 768px){
        border-radius: 10px;
    }

    .image_wrapper{

        width:100%;

        img {
            width: 100%;
            height: 100%;

            @media only screen and (min-width: 768px){
                margin: 25px;
                border-radius: 15px;
            }
        } 
    }
    
    .hero_text_container{
        position: absolute;
        bottom: 45px;
        left: 0;
        opacity: 1.5;

        @media only screen and (min-width: 768px){
            max-width:480px;
            left: 100px;
        }
    }

    .hero_text_header{
        margin-left: 24px;
        font-size: 40px;
        color: #fefefe;
        line-height: 52px;
        letter-spacing: .05em;

        span {
            font-style: italic;
            font-weight: 500
        }
    }

    .hero_text_detail{
        margin: 24px 24px 32px 24px;
        font-size: 18px;
        line-height: 30px;
        color: #fefefe;
        /* @media only screen and (min-width: 768px){
            margin: auto 40px auto 25px;
        } */
       
    }

    .hero_search_container{
        
        width: 275px;
        position: relative;
        margin-left: 24px;

        @media only screen and (min-width: 768px){
            width: 350px;
        }

        .hero_search_input{
            width: 100%;
            height: 50px;
            border-radius: 25px;
            font-size: 12px;  
            z-index: -1;

            ::placeholder {
                position: absolute;
                bottom: 50%;
                transform: translateY(50%);
                left:25px;
            }
        }

        .search_box_icon {
            position: absolute;
            right:0;
            bottom: 50%;
            transform: translateY(50%);
            width: 40px;
            height: 40px;
            cursor: pointer;
            font-size: 40px;
            color: #29b5d0;
        }
    
    }
    
`;


const HeroBanner = () => {

    const [imageBanner, setImageBanner] = useState(MOB_BANNER_IMAGE_URL);
    
    useEffect(() => {
        window.screen.width <= 320 
            ? setImageBanner(MOB_BANNER_IMAGE_URL)
            : setImageBanner(DESK_BANNER_IMAGE_URL);
    });


    return (
      <HeroBannerStyle>
        <div className="image_wrapper">
            <img src={imageBanner} alt='Woman charging an electric vehicle' />
        </div>
        <div className='hero_text_container'> 
            <div className='hero_text_header'>
                <span>Find Charging fast</span>
            </div>
            <div className='hero_text_detail'>
                Explore the largest public fast charging network in the  
                U.S. — letting you charge in as little as 30 minutes 
            </div>
            <div className='hero_search_container'>
                <form>
                    <input className='hero_search_input' placeholder='ENTER CITY OR ZIP' />
                    <IoMdArrowDroprightCircle className='search_box_icon'/>
                </form>
            </div>
        </div>
      </HeroBannerStyle>
    )
};

export default HeroBanner;