import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const AboutBannerStyle = styled.div`

    width: 100%;
    position: relative;
    font-family: 'Omnes';

    @media only screen and (min-width: 768px){
        border-radius: 10px;
    }

    .About__link {
        margin-left: 24px;
        margin-top: 15px;
        margin-bottom: 25px;

        @media only screen and (min-width: 768px){
            position: absolute;
            top: 90px;
            left: 105px;
        }
        @media only screen and (min-width: 1024px){
            position: absolute;
            top: 75px;
            left: 90px;
        }
        @media only screen and (min-width: 1440px){
            position: absolute;
            top: 100px;
            left: 60px;
        }

        a {
            text-decoration: none;
            text-transform: uppercase;
            color: #011352;
            font-weight: bold;

            @media only screen and (min-width: 768px){
                color: white;
                font-size: 15px;
            }

            span {
                margin-left: 10px;
                margin-bottom: -100px;

                .arrow {
                    margin-bottom: -6px;
                    margin-left: -5px;

                    @media only screen and (min-width: 768px){
                        fill: white;
                    }
                }
            }
        }       
    }

    .image_wrapper{

        width:100%;

        img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
        } 
    }
    
    .hero_text_container{
        margin-bottom: 50px;
        position: relative;
        bottom: -5px;
        left: 0;
        color: #011352;

        @media only screen and (min-width: 768px){
            position: absolute;
            top: 125px;
            left: 100px;
            margin: 0 150px 0 0px;
        }

        @media only screen and (min-width: 1024px){
            position: absolute;
            top: 125px;
            left: 90px;
        }

        @media only screen and (min-width: 1440px){
            position: absolute;
            top: 150px;
            left: 50px;
        }
    }

    .hero_text_header{
        margin-left: 24px;
        font-size: 40px;
        line-height: 52px;
        letter-spacing: .05em;

        @media only screen and (min-width: 768px){
            font-size: 48px;
            color: white;
        }

        @media only screen and (min-width: 1024px){
            width: 400px;
            line-height: 40px;
        }

        @media only screen and (min-width: 1440px){
            width: 500px;
            line-height: 50px;
        }
    }

    .hero_text_detail{
        margin-left: 24px;
        margin-top: 24px;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: .05em;
        margin-top: 24px;

        @media only screen and (min-width: 768px){
            color:white;
            line-height: 25px;
            margin-top: 15px;
        }

        @media only screen and (min-width: 1024px){
            margin-right: 100px
        }
        
        @media only screen and (min-width: 1440px){
            font-size: 20px;
            width: 500px;
        }
    }
`;

const AboutBanner = ({title, subtitle, imageMobile, imageDesktop}) => {

    const [isMobile, setIsMobile] = useState(true);
    
    const Arrow_SVG = 
        <svg class="arrow" width="24" height="15" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M4.898.165a.563.563 0 00-.796.795L7.08 3.938H.562a.563.563 0 000 1.124H7.08L4.101 8.04a.563.563 0 00.796.795l3.937-3.937a.563.563 0 000-.796L4.898.165z"></path>
        </svg>;

    const handleResize = () => {
        if (window) {
            setIsMobile(window.innerWidth <= 768);
        }
    };

    useEffect(() => {
        handleResize();
        if (window) {
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    });

    return (
      <AboutBannerStyle>
        

        <div className="image_wrapper">
            <img src={(isMobile)
            ? imageMobile?.url
            : imageDesktop?.url} alt='Woman charging an electric vehicle' loading="lazy" />
        </div>

        <div className='About__link'>
            <a href="/about-us/" >About Us <span>{ Arrow_SVG || ""}</span></a>
        </div>
        
        <div className='hero_text_container'> 
            <div className='hero_text_header'>
                {title}
            </div>
            <div className='hero_text_detail'>
                {subtitle}
            </div>
            
        </div>
      </AboutBannerStyle>
    )
};

export default AboutBanner;