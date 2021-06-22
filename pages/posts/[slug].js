import styled from 'styled-components'
import Header from "../../components/header";
import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts, getMainMenu, getTopMenu } from '../../lib/api'
import PostTitle from '../../components/post-title'


const InnerContainer = styled.div`
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

`


export default function Post({ post, morePosts, preview, mainMenuItems, topMenuItems }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>

      <Header menulinks={mainMenuItems} />

      <section className="main">
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <InnerContainer>
            <article>
              <Head>
                <title>
                  {post.title}
                </title>
                <meta property="og:image" content={post.coverImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
            </article>
          </InnerContainer>
        )}
      </Container>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  const mainMenuItems = (await getMainMenu(preview)) ?? [];
  const topMenuItems = (await getTopMenu(preview)) ?? [];

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
      mainMenuItems,
      topMenuItems,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}
