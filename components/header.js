import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { FaTimes, FaBars, FaSearch } from "react-icons/fa";

const Navbar = styled.div`
  font-family: "Omnes";
  background-color: #0b0f4d;
  width: 100%;
  padding: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  letter-spacing: 0.02em;

  .search-textbox {
    width: 100px;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    input {
      width: 100px;
      border: none;
      background-color: #0b0f4d;
      border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
      display: inline-block;
      padding: 7px 11px 7px 28px;
      color: #fff;
    }
  }

  .navbar {
    padding: 0 30px 0 40px;
    width: 100%;
    max-width: auto;

    @media (min-width: 1025px) {
      width: 100%;
      max-width: 1200px;
      padding: 0 20px;
    }

    height: 60px;
    display: flex;
    justify-content: space-between;
    z-index: 1;

    //logo
    &__logo {
      width: 135px;
      height: auto;
      cursor: pointer;

      .logo {
        width: 115px;
        flex-shrink: 0;
      }
    }

    .active {
      right: 0;
    }
    .no-active {
      right: -100%;
    }

    //navbar-links
    .navbar-content {
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      transition: all 0.3s;

      &__clickable {
        width: 20%;
        transition: all 0.5s;
        background-color: gray;
        opacity: 0.2;
        @media (min-width: 768px) {
          width: 60%;
          max-width: 1200px;
          padding: 0 20px 0 0;
        }
      }

      &__list {
        width: 80%;
        background-color: #0b0f4d;
        display: flex;
        flex-direction: column;
        padding: 24px 0 100px 40px;

        @media (min-width: 768px) {
          width: 40%;
          max-width: 1200px;
        }

        &-left {
          &-items {
            display: flex;
            flex-direction: column;
            .link {
              color: #fff;
              text-decoration: none;
              padding: 0 20px;
              text-transform: uppercase;
              font-size: 14px;

              font-weight: 500;
            }
            .left-link {
              padding: 15px 15px 15px 0px;
            }
          }
        }
        .navbar-right {
          &__links {
            display: flex;
            flex-direction: column;

            .right-link {
              color: #fff;
              text-decoration: none;
              text-transform: uppercase;
              font-size: 14px;
              font-weight: 600;
              line-height: 50px;
            }
          }
        }
      }
    }

    .navbar-gadgets {
      display: flex;
      flex-direction: row;
      align-items: center;

      &__search {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        .searchbox {
          background-color: #0b0f4d;
          border: none;
          border-bottom: 1px solid #fff;
          width: 120px;
          color: #fff;

          ::placeholder {
            text-align: center;
          }
        }
      }
    }

    .displaynone {
      display: none;
    }

    .z-index {
      visibility: hidden;
    }
    .displayblock {
      display: block;
    }

    .icons {
      color: #fff;
      padding: 5px;
    }

    .navbar-search {
      display: flex;
      flex-direction: row;
      align-items: center;
      /* padding-left: 10px; */

      svg {
        margin: 0 0 0 20px;
      }
    }
  }

  @media (min-width: 1033px) {
    .navbar {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around !important;
      margin: 0 2%;
      padding: 0;

      .navbar-content {
        position: inherit;
        height: 80px;

        &__clickable {
          display: none;
        }

        &__list {
          width: 100%;
          position: inherit;
          flex-direction: row;
          padding: 0;
          justify-content: space-between;

          &-left {
            display: flex;
            justify-content: flex-start;
            padding-left: 30px;

            &-items {
              flex-direction: row;
              font-size: 14px;

              .left-link {
              }
            }
          }
          .navbar-right {
            display: flex;
            justify-content: flex-end;
            width: 50px;

            height: 80px;

            &__links {
              flex-direction: row;
              font-size: 14px;
              width: auto;

              .link-container {
                width: 125px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;

                :first-child {
                  border-right: 1px solid hsla(0, 0%, 100%, 0.3);
                  border-left: 1px solid hsla(0, 0%, 100%, 0.3);
                }

                :last-child {
                  border-right: 1px solid hsla(0, 0%, 100%, 0.3);
                }

                .right-link {
                  padding: 0 15px 0 15px;
                  line-height: normal;
                }
              }
            }
          }
        }

        .link {
          line-height: normal;
          display: flex;
          align-items: center;
          padding: 0 20px;
        }
      }

      .search-textbox {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 10px 0 0 120px;

        input {
          width: 400px;
          border: none;
          background-color: #0b0f4d;
          border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
          display: inline-block;
          padding: 7px 11px 7px 28px;
        }
      }
    }
    .mobile-nav {
      display: none;
    }
  }
`;

const Header = ({ menulinks }) => {
  const [isClicked, setClicked] = useState();

  const toggleClicked = () => {
    setClicked(!isClicked);
  };

  const [isClickedSearchIcon, setClickedSearchIcon] = useState();

  const toggleSearch = () => {
    setClickedSearchIcon(!isClickedSearchIcon);
  };

  return (
    <Navbar>
      <div className="navbar">
        <div className="navbar__logo">
          <Link href="/">
            <img className="logo" src="/images/logo.svg" />
          </Link>
        </div>
        <div className={isClickedSearchIcon ? "search-textbox" : "displaynone"}>
          <input type="text" placeholder="SEARCH" className="searchbox" />
        </div>

        <div className={`navbar-content ${isClicked ? "active" : "no-active"}`}>
          <div
            className="navbar-content__clickable"
            onClick={toggleClicked}
          ></div>
          <div className="navbar-content__list">
            <div
              className={
                isClickedSearchIcon ? "z-index" : "navbar-content__list-left"
              }
            >
              <div className="navbar-content__list-left-items">
                {menulinks &&
                  menulinks?.menulinks?.items?.map(({ title }) => {
                    return (
                      <Link href="/">
                        <a className="left-link link">{title}</a>
                      </Link>
                    );
                  })}
              </div>
            </div>

            <div className="navbar-right">
              <div className="navbar-right__links">
                <div className="link-container">
                  <Link href="/">
                    <a className="right-link  link ">Home products</a>
                  </Link>
                </div>
                <div className="link-container">
                  <Link href="/">
                    <a className="right-link  link ">Commercial solutions</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-gadgets">
          <div className="navbar-gadgets__search">
            <div className="navbar-search icons" onClick={toggleSearch}>
              {isClickedSearchIcon ? <FaTimes /> : <FaSearch />}
            </div>
          </div>

          <div className={isClickedSearchIcon ? "displaynone" : ""}>
            <div className="mobile-nav icons" onClick={toggleClicked}>
              {isClicked ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
