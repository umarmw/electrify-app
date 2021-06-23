import styled from "styled-components";
import {GOOGLE_PLAY, APPLE_STORE} from "../lib/constants";

const ContactlessStyle = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction:column;
    width:100%;
    font-family: 'Omnes';

    @media (min-width: 750px) {
        width: 30%;
        margin-left: 20px;
        margin-right: 20px;
    }

    @media (min-width: 1125px) {
        position: relative;
        top: 55px;
    }

    .contactless__title {
        color: #0a124a;
        font-size: 32px;
        letter-spacing: .02em;
        font-weight: bold;

        @media only screen and (min-width: 768px){
            font-size: 20px;
            line-height: 25px;
        }
        @media only screen and (min-width: 1440px){
            font-size: 32px;
        }
    }

    p {
        font-size: 16px;
        color: #011352;
        letter-spacing: .02em;

        @media only screen and (min-width: 768px){
            font-size: 16px;
        }

        @media only screen and (min-width: 1024px){
            line-height: 25px;
        }
        
        @media only screen and (min-width: 1440px){
            font-size: 18px;
            line-height: 32px;
        }
    }

    .contactless__icons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        @media only screen and (min-width: 375px){
            position: relative;
            left: -20px;
        }

        @media only screen and (min-width: 425px){
            position: relative;
            left: -30px;
        }

        @media only screen and (min-width: 768px){
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            left: 0px;
        }

        @media only screen and (min-width: 1024px){
            flex-direction: row;
        }

        @media only screen and (min-width: 1440px){
            display: block;
        }

        img{
            width: 130px;
            height: 40px;

            @media only screen and (min-width: 768px){
                width: 117px;
                height: 40px
            }
            
        }
    }
`;

const Contactless = () => {

    return (
        <ContactlessStyle>
            <div className='contactless__title'>
                Contactless <br />
                In-app payment
            </div>
            <div className='contactless__text'>
                <p>Download the Electrify America mobile app to pay for your charging session right from your phone.</p>
            </div>
            <div className='contactless__icons'>
                <a href="https://itunes.apple.com/us/app/electrify-america/id1458030456?mt=8">

                    <picture>
                        <source srcSet={`${APPLE_STORE}?fm=webp&w=117&h=40`} type="image/webp" />
                        <img
                            src={`${APPLE_STORE}?w=117&h=40`}
                            alt="Download on the App Store"
                            loading="lazy"
                        />
                    </picture>

                </a>
                                
                <a href="https://play.google.com/store/apps/details?id=com.ea.evowner&amp;rdid=com.ea.evowner">

                    <picture>
                        <source srcSet={`${GOOGLE_PLAY}?fm=webp&w=117&h=40`} type="image/webp" />
                        <img
                            src={`${GOOGLE_PLAY}?w=117&h=40`}
                            alt="Get it on Google Play"
                            loading="lazy"
                        />
                    </picture>

                </a>          
            </div>
        </ContactlessStyle>
    )
};

export default Contactless;