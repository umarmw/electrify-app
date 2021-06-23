import Link from 'next/link'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <picture>
      <source className={[slug, "img--responsive img--rounded"].join(" ")} srcSet={`${url}?fm=webp`} type="image/webp" />
      <img
        src={url}
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
