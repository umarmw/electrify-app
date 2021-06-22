import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className=""
    >
      <Container>
        <div className="">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className=""
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : null }
        </div>
      </Container>
    </div>
  )
}
