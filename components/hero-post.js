import Link from 'next/link'
import CoverImage from '../components/cover-image'

import styled from 'styled-components'

const HeroPostStyle = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  

  @media (min-width: 750px) {
    width: 30%;
    margin-left: 20px;
    margin-right: 20px;
  }

  a {
    line-height: 1;
    font-size: 16px;
    letter-spacing: .05em;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    color: #0a124a;
    font-family: 'Omnes';
    max-width: 504px;
    text-decoration: none;
  }

  .hero-post__excerpt{
    color: #011352;
    font-family: 'Omnes';
    letter-spacing: .02em;
    line-height: 1.5;
  }
  
`


export default function HeroPost({
  title,
  introImage,
  excerpt,
  slug,
}) {
  return (
    <HeroPostStyle>
      <div className="">
        <CoverImage title={title} slug={slug} url={introImage.url} />
      </div>
      <div className="">
        <h3 className="">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="">{title}</a>
          </Link>
        </h3>
        <div>
          <p className="hero-post__excerpt">{excerpt}</p>
        </div>
      </div>
    </HeroPostStyle>
  )
}
