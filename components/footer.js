import styled from "styled-components";
import Link from "next/link";
import Social from "./social-links";

const FooterStyle = styled.div`
  height: auto;
  width: 100%;
  background-color: #011352;

  .link {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Omnes";
    line-height: 30px;
    font-size: 14px;
  }

  .link-info {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    font-family: "Omnes";
    line-height: 30px;
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
      &__logo {
        height: 100px;

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
      &__store {
        width: auto;
        display: flex;
        justify-content: center;
        padding: 20px;

        .logo {
          width: 93px;
          height: 36px;
          padding: 5px;
        }
      }

      &__social {
        display: flex;
        justify-content: center;
      }
      &__info {
        text-align: center;
        span {
          font-weight: 600;
        }
      }
    }
  }

  @media (min-width: 1033px) {
    padding: 65px 0 38px;
    width: 100%;

    .footer {
      display: flex;
      flex-direction: column;
      padding: 0px 130px;

      .footer-content {
        margin: 0 0 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        &__items {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          width: 100%;
        }
      }

      .footer-bottom {
        flex-direction: row;
        justify-content: space-between;
        &__social {
          padding: 20px;
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
            <img className="logo" src="/images/apple.png" />
            <img className="logo" src="/images/android.png" />
          </div>

          <div className="footer-bottom__social">
            <Social />
          </div>
        </div>
        <div className="footer-bottom__info">
          <a className="link-info header">© 2021 Electrify America</a>
          <a className="link-info">Privacy</a>
          <a className="link-info">Terms of use</a>
          <a className="link-info">Social Media House</a>
          <a className="link-info">
            Support: <span>1-833-632-2778</span>
          </a>
        </div>
      </div>
    </FooterStyle>
  );
}
