import React, {useState, useEffect} from 'react';
import styled from "styled-components";

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
                border-radius: 15px;
            }
        } 
    }

    .gradient{
        position: absolute;
        top: 0;
        width: 100%;
        height: 99%;
        background: -webkit-gradient(linear,left top,right top,color-stop(5.26%,transparent),color-stop(71.78%,rgba(0,0,0,.8)),to(rgba(0,0,0,.9)));
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
        opacity: .6;

        @media only screen and (min-width: 768px){
            border-radius: 14px;
        }
    }
    
    .hero_text_container{
        position: absolute;
        bottom: 45px;
        left: 22px;
        font-family: 'Omnes';
        font-style: normal;
        margin-left: -20px;

        @media only screen and (min-width: 768px){
            max-width:480px;
            left: 100px;
        }

        @media only screen and (min-width: 1024px){
            position: absolute;
            left: 100px;
            top: 121px;
        }

        @media only screen and (min-width: 1440px){
            position: absolute;
            left: 100px;
            top: 266px;
        }
    }

    .hero_text_header{
        margin-left: 24px;
        font-size: 40px;
        color: #fefefe;
        line-height: 52px;
        letter-spacing: .05em;

        span {
            font-weight: 500
        }

        @media only screen and (min-width: 1440px){
            font-size: 48px;
        }
    }

    .hero_text_detail{
        margin: 24px 24px 32px 24px;
        font-size: 18px;
        line-height: 30px;
        color: #fefefe;

        @media only screen and (min-width: 1440px){
            font-size: 24px;
        }
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
            border: none;

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

        .icon_circle {
            width: 40px;
            height: 40px;
            position: absolute;
            right: 10px;
            border-radius: 100px;
            background-color: #29b5d0;
            top: 8px;
            cursor: pointer;

            .arrow {
                position: relative;
                top: 13px;
                left: 13px;
            }
        }
    
    }
    
`;


const HeroBanner = ({title, subtitle, imageMobile, imageDesktop}) => {

    // const [isMobile, setIsMobile] = useState(true);

    const Arrow_SVG = 
        <svg width="15" height="15" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
            <path d="M.785.556c-.309.309-.309.81 0 1.12l5.038 5.037-5.262 5.262a.792.792 0 001.12 1.12L7.356 7.42a1 1 0 000-1.414L1.905.556a.792.792 0 00-1.12 0z" fill="#EFEFEF"></path>
        </svg>;

    // const handleResize = () => {
    //     if (window) {
    //         setIsMobile(window.innerWidth < 768);
    //     }
    // };

    // useEffect(() => {
    //     handleResize();
    //     if (window) {
    //         window.addEventListener('resize', handleResize);
    //         return () => {
    //             window.removeEventListener('resize', handleResize);
    //         };
    //     }
    // });

    return (
      <HeroBannerStyle>
        <div className="image_wrapper">

        <picture>
            <source srcSet={`${imageDesktop?.url}?fm=webp`} media="(min-width: 768px)" type="image/webp" />
            <source srcSet={`${imageMobile?.url}?fm=webp`} media="(max-width: 767px)" type="image/webp" />
            <source srcSet={`${imageDesktop?.url}`} media="(min-width: 768px)" type="image/png" />
            <source srcSet={`${imageMobile?.url}`} media="(max-width: 767px)" type="image/png" />
            <img src={imageMobile?.url} alt="Woman charging an electric vehicle" />
        </picture>

            {/* <img src={(isMobile)
            ? imageMobile?.url
            : imageDesktop?.url} alt='Woman charging an electric vehicle' loading="lazy" /> */}


        </div>
        <div className="gradient" />
        <div className='hero_text_container'> 
            <div className='hero_text_header'>
                <span>{title}</span>
            </div>
            <div className='hero_text_detail'>
                {subtitle}
            </div>
            <div className='hero_search_container'>
                <form>
                    <input className='hero_search_input' placeholder='ENTER CITY OR ZIP' />
                    <div className='icon_circle'>
                        {Arrow_SVG || ""}
                    </div>
                </form>
            </div>
        </div>
      </HeroBannerStyle>
    )
};

export default HeroBanner;