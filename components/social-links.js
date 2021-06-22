import React from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai";

import styled from "styled-components";

const SocialStyle = styled.div`
  .social-links {
    display: flex;
    justify-content: space-between;
    .social-link {
      font-size: 30px;
      color: #fff;
      padding: 0px 5px;
    }
  }

  @media (min-width: 1033px) {
    .social-links {
      width: auto;
    }

    .social-link {
      padding: 0px 5px;
    }
  }
`;

const Social = () => {
  return (
    <SocialStyle>
      <div className="social-links">
        <i className="social-link">
          <AiFillFacebook />
        </i>
        <i className="social-link">
          <AiFillInstagram />
        </i>
        <i className="social-link">
          <AiFillTwitterSquare />
        </i>
        <i className="social-link">
          <AiFillLinkedin />
        </i>
        <i className="social-link">
          <AiFillYoutube />
        </i>
      </div>
    </SocialStyle>
  );
};

export default Social;
