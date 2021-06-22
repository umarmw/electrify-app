import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { FaTimes, FaBars, FaSearch } from "react-icons/fa";

const Navbar = styled.div`
  font-family: 'Omnes';
  background-color: #0b0f4d;
  width: 100%;
  padding: 0;

  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .navbar {

    padding: 0 30px 0 40px;
    width: 100%;
    max-width: auto;

    @media (min-width: 1025px) {
      width: 100%;
      max-width: 1200px;
      padding: 0 20px 0 0;
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
        width: 100%;
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
      top: 18px;
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
      }

      &__list {
        width: 80%;
        background-color: #0b0f4d;
        display: flex;
        flex-direction: column;
        padding: 24px 0 0 40px;

        &-left {
          &-items {
            display: flex;
            flex-direction: column;
            .left-link {
            }
          }
        }
        .navbar-right {
          &__links {
            display: flex;
            flex-direction: column;
            .right-link {
              font-weight: 800;
            }
          }
        }

        .link {
          color: #fff;
          text-decoration: none;
          line-height: 50px;
          text-transform: uppercase;
          // font-family: "Omnes";
        }
      }
    }

    .navbar-gadgets {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 3px;

      &__search {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        .searchbox {
          background-color: #0b0f4d;
          border: none;
          border-bottom: 1px solid #fff;
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
      padding: 10px;
    }
  }

  @media (min-width: 1033px) {
    .navbar {
      justify-content: center;
      align-items: center !important;
      margin: 0 2%;
      padding: 0;

      .navbar-content {
        position: inherit;

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
                :first-child {
                  display: none;
                }
              }
            }
          }
          .navbar-right {
            display: flex;
            justify-content: flex-end;
            width: 50px;
            margin-top: -10px;
            height: 80px;

            &__links {
              flex-direction: row;
              font-size: 14px;
              width: auto;

              .right-link {
                border-left: 1px solid gray;
                border-right: 1px solid gray;
              }
            }
          }
        }

        .link {
          padding: 10px;
          line-height: normal;
          display: flex;
          align-items: center;
        }
      }
      .mobile-nav {
        display: none;
      }
    }
  }
`;

const Header = ({ menulinks, title, url }) => {
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

        <div className={`navbar-content ${isClicked ? "active" : "no-active"}`}>
          <div
            className="navbar-content__clickable"
            onClick={toggleClicked}
          ></div>
          <div className="navbar-content__list">
            <div className="navbar-content__list-left">
              <div className="navbar-content__list-left-items">
                {menulinks[0].menulinks.items.map(({ title, url }) => {
                  return (
                    <Link href={url}>
                      <a className="left-link link">{title}</a>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="navbar-right">
              <div className="navbar-right__links">
                <Link href="/">
                  <a className="right-link link">Home products</a>
                </Link>
                <Link href="/">
                  <a className="right-link link">Commercial solutions</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-gadgets">
          <div className="navbar-gadgets__search">
            <div className="navbar-search icons" onClick={toggleSearch}>
              {isClickedSearchIcon ? <FaTimes /> : <FaSearch />}
            </div>
            <div className={isClickedSearchIcon ? "" : "displaynone"}>
              <input type="text" placeholder="SEARCH" className="searchbox" />
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
