import styled from 'styled-components'

import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import HeroBanner from '../components/hero-banner'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  max-width: 1920px;
  margin: 0px auto;
  padding: 0px 20px 30px;

  @media only screen and (max-width: 1130px){
    margin: 60px 0px 0px;
  }

  @media (min-width: 750px) {
    padding: 60px 100px 80px;
    flex-direction: normal;
  }

  .post-container__title {
    color: rgb(10, 18, 74);
    font-size: 32px;
    letter-spacing: 0.02em;
    line-height: 36px;
    font-family: Omnes;
    font-weight: 600;
    max-width: 504px;
  }

  .post-container__section {
    display: flex;
    margin-top: 60px;
    overflow: hidden;
    flex-direction: column;

    @media (min-width: 750px) {
      flex-direction: row;
    }
  }



`

const PostMainTitle = styled.div`
  
`;

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  const posts = allPosts;

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <HeroBanner />
        <Container>
          <Intro />

          <PostContainer>
            <h2 className="post-container__title"> Learn about charging with <br/>  Electrify America </h2>
            <div className="post-container__section">
              {
                posts && posts.slice(0, 3).map((item) =>

                  <HeroPost
                  title={item.title}
                  introImage={item.introImage}
                  slug={item.slug}
                  excerpt={item.excerpt}
                  />
                 
                )
              }
            </div>

            <div className="post-container__section">
              {
                posts && posts.slice(3, 6).map((item) =>

                  <HeroPost
                  title={item.title}
                  introImage={item.introImage}
                  slug={item.slug}
                  excerpt={item.excerpt}
                  />
                 
                )
              }
            </div>
          </PostContainer>
{/* 
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
