import styled from "styled-components";
import Header from "../components/header";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Layout from "../components/layout";
import HeroBanner from "../components/hero-banner";
import AboutBanner from "../components/about-banner";
import {
  getAllPostsForHome,
  getHeroBanner,
  getMainMenu,
  getTopMenu,
} from "../lib/api";
import Head from "next/head";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  max-width: 1920px;
  margin: 0px auto;
  padding: 0px 20px 30px;

  @media only screen and (max-width: 1130px) {
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
`;

const PostMainTitle = styled.div``;

export default function Index({
  preview,
  allPosts,
  heroBannerItem,
  aboutBannerItem,
  mainMenuItems,
  topMenuItems,
}) {
  const posts = allPosts;

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Electrify America</title>
        </Head>

        <Header menulinks={mainMenuItems} />

        <HeroBanner
          title={heroBannerItem.title}
          subtitle={heroBannerItem.subtitle}
          imageMobile={heroBannerItem.imageMobile}
          imageDesktop={heroBannerItem.imageDesktop}
        />

        <Container>
          <PostContainer>
            <h2 className="post-container__title">
              {" "}
              Learn about charging with <br /> Electrify America{" "}
            </h2>
            <div className="post-container__section">
              {posts &&
                posts
                  .slice(0, 3)
                  .map((item) => (
                    <HeroPost
                      title={item.title}
                      introImage={item.introImage}
                      slug={item.slug}
                      excerpt={item.excerpt}
                    />
                  ))}
            </div>

            <div className="post-container__section">
              {posts &&
                posts
                  .slice(3, 6)
                  .map((item) => (
                    <HeroPost
                      title={item.title}
                      introImage={item.introImage}
                      slug={item.slug}
                      excerpt={item.excerpt}
                    />
                  ))}
            </div>
          </PostContainer>

          <AboutBanner
            title={aboutBannerItem.title}
            subtitle={aboutBannerItem.subtitle}
            imageMobile={aboutBannerItem.imageMobile}
            imageDesktop={aboutBannerItem.imageDesktop}
          />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  const heroBannerItem =
    (await getHeroBanner("2cdZ42QVAFufVXp7cxnRUm", preview)) ?? [];
  const aboutBannerItem =
    (await getHeroBanner("xlYkXDLlbM8h3ExF4vfZ2", preview)) ?? [];
  const mainMenuItems = (await getMainMenu(preview)) ?? [];
  const topMenuItems = (await getTopMenu(preview)) ?? [];

  console.log(heroBannerItem);

  return {
    props: {
      preview,
      allPosts,
      heroBannerItem,
      aboutBannerItem,
      mainMenuItems,
      topMenuItems,
    },
  };
}
