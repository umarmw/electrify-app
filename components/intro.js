import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="">
      <h1 className="">
        Blog.
      </h1>
      <h4 className="">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className=""
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
          className=""
        >
          {CMS_NAME}
        </a>
        .
      </h4>
    </section>
  )
}
