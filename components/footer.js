import styled from "styled-components";
import Link from "next/link";
import Social from "./social-links";
import {GOOGLE_PLAY, APPLE_STORE} from "../lib/constants";

const FooterStyle = styled.div`
  height: auto;
  background-color: #011352;
  letter-spacing: 0.02em;
  .link {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Omnes";
    line-height: 23px;
    font-size: 14px;
  }

  .link-info {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    font-family: "Omnes";
    line-height: 23px;
    font-size: 14px;
  }
  .p-b {
    padding-bottom: 30px;
  }

  .header {
    font-weight: 600;
  }

  .footer {
    padding: 32px;
    .footer-content {
      margin-bottom: 50px;
      &__logo {
        height: 95px;

        .logo {
          height: 60%;
          width: auto;
        }
      }
      &__items {
        &-list {
          display: flex;
          flex-direction: column;
          padding-bottom: 30px;
        }
      }

      &__store {
        width: 100%;
        display: flex;
        justify-content: center;
        &-box {
          .logo {
            height: 36px;
            width: 93px;
            padding: 10px;
          }
        }
      }
    }

    .footer-bottom {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      &__store {
        width: auto;
        display: flex;
        justify-content: center;

        .logo {
          width: 93px;
          height: 36px;
          padding: 0px 5px;
        }
      }

      &__social {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }
      &__info {
        display: flex;
        justify-content: center;
        padding-bottom: 80px;
        margin-top: 30px;
        flex-wrap: wrap;
        line-height: normal;
        span {
          font-weight: 600;
        }
      }
    }
  }

  @media (min-width: 750px) {
    padding: 65px 32px 38px;

    .footer {
      max-width: 1200px;
      padding: 0;
      display: flex;
      flex-direction: column;

      @media (min-width: 1025px) {
        padding: 0 130px;
        margin: auto;
      }

      .link {
        line-height: 23px;
      }

      .footer-content {
        justify-content: space-between;

        margin: 0px 0px 50px;
        &__logo {
          margin-right: 80px;
        }

        display: flex;

        &__items {
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          &-list {
            padding: 0 16px;
            margin: 0 16px 30px 0;
            width: fit-content;
          }
        }
      }

      .footer-bottom {
        flex-direction: row;
        justify-content: space-between;
        @media (max-width: 1310px) {
          flex-direction: column;
        }

        &__info {
          margin: 80px 0 0 0;
          padding: 0;
          @media (max-width: 1310px) {
            margin: 30px 0 0 0;
          }
          a {
            padding: 20px;
          }
        }

        &__store {
          padding: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-content__logo">
            <img className="logo" src="/images/logo.svg" />
          </div>
          <div className="footer-content__items">
            <div className="footer-content__items-list">
              <Link href="/">
                <a className="header link">Locate a charger</a>
              </Link>
              <Link href="/">
                <a className="link">How it works</a>
              </Link>
              <Link href="/">
                <a className="link">pricing</a>
              </Link>
              <Link href="/">
                <a className="link">mobile app</a>
              </Link>
              <Link href="/">
                <a className="link">renewable energy</a>
              </Link>
              <Link href="/">
                <a className="link">glossary</a>
              </Link>
            </div>

            <div className="footer-content__items-list">
              <Link href="/">
                <a className="header link">about</a>
              </Link>
              <Link href="/">
                <a className="link">our plan</a>
              </Link>
              <Link href="/">
                <a className="link">news & update</a>
              </Link>
              <Link href="/">
                <a className="link">our team</a>
              </Link>
              <Link href="/">
                <a className="link">careers</a>
              </Link>
            </div>

            <div className="footer-content__items-list">
              <Link href="/">
                <a className="header link">contact us</a>
              </Link>
              <Link href="/">
                <a className="link">submissions</a>
              </Link>
              <Link href="/">
                <a className="link">sign up for update</a>
              </Link>
              <Link href="/">
                <a className="link">marketing opportunities</a>
              </Link>
            </div>

            <div className="footer-content__items-list">
              <Link href="/">
                <a className="header link">home products</a>
              </Link>
            </div>
            <div className="footer-content__items-list">
              <Link href="/">
                <a className=" header link"> commercial solutions</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom__store">

            <picture>
              <source className="logo" srcSet={`${APPLE_STORE}?fm=webp&w=93&h=31`} type="image/webp" />
              <img
                className="logo"
                src={`${APPLE_STORE}?w=93&h=31`}
                alt="Download on the App Store"
                loading="lazy"
              />
            </picture>

            <picture>
              <source className="logo" srcSet={`${GOOGLE_PLAY}?fm=webp&w=93&h=31`} type="image/webp" />
              <img
                className="logo"
                src={`${GOOGLE_PLAY}?w=93&h=31`}
                alt="Download on the GooglePlay Store"
                loading="lazy"
              />
            </picture>

          </div>

          <div className="footer-bottom__social">
            <Social />
          </div>
        </div>
        <div className="footer-bottom__info">
          <a className="link-info header">© 2021 Electrify America</a>
          <a className="link-info">Privacy</a>
          <a className="link-info">Terms of use</a>
          <a className="link-info">Social Media House Rules</a>
          <a className="link-info">
            Support: <span>1-833-632-2778</span>
          </a>
        </div>
      </div>
    </FooterStyle>
  );
}
