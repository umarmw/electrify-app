import Link from 'next/link'
import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'

import styled from 'styled-components'

const HeroPostStyle = styled.section`
  max-width: 320px;
`


export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <HeroPostStyle>
      <div className="">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="">
        <div>
          <h3 className="">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="">{title}</a>
            </Link>
          </h3>
          <div className="">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          <p className="">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </HeroPostStyle>
  )
}
