import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="">
        <div className="">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="">
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  )
}
