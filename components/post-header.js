import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="">
        <CoverImage title={title} url={coverImage.url} />
      </div>
    </>
  )
}
