import styled from 'styled-components'

const H1Styled = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`

export default function PostTitle({ children }) {
  return (
    <H1Styled>
      {children}
    </H1Styled>
  )
}
