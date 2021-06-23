import Link from 'next/link'
import styled from 'styled-components'

const Img_Block = styled.img`
  display: block;
`;


export default function CoverImage({ title, url, slug }) {
  const image = (
    <picture>
      <source className={[slug, "img--responsive img--rounded"].join(" ")} srcSet={`${url}?fm=webp&w=425`} type="image/webp" />
      <Img_Block
        src={`${url}?w=425`}
        alt={`Cover Image for ${title}`}
        className={[slug, "img--responsive img--rounded"].join(" ")}
        loading="lazy"
      />
    </picture>
  )

  return (
    <div className="">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
