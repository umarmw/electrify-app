import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const AboutBannerStyle = styled.div`

    width: 100%;
    position: relative;

    @media only screen and (min-width: 768px){
        border-radius: 10px;
    }

    .About__link {
        margin-left: 20px;
        margin-bottom: 25px;

        @media only screen and (min-width: 768px){
            position: absolute;
            top: 50px;
            left: 100px;
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
            font-family: Arial, Helvetica, sans-serif;

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

        @media only screen and (min-width: 768px){
            position: absolute;
            top: 75px;
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
        font-family: Arial, Helvetica, sans-serif;
        font-size: 40px;
        color: black;
        line-height: 52px;
        letter-spacing: .05em;

        @media only screen and (min-width: 768px){
            color: white;
            font-size: 35px;
        }

        @media only screen and (min-width: 1024px){
            width: 400px;
            line-height: 40px;
        }

        @media only screen and (min-width: 1440px){
            font-size: 40px;
            width: 500px;
            line-height: 50px;
        }
    }

    .hero_text_detail{
        font-family: Arial, Helvetica, sans-serif;
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
            line-height: 40px;
        }
    }
`;

const AboutBanner = ({title, subtitle, imageMobile, imageDesktop}) => {

    const [isMobile, setIsMobile] = useState(true);
    
    const Arrow_SVG = 
        <svg className='arrow' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
    ;

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