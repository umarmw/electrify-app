import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  font-family: 'Omnes';
`


export default function PostBody({ content }) {
  return (
    <StyledWrapper>
      {documentToReactComponents(content.json)}
    </StyledWrapper>
  )
}
