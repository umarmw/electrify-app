import styled from 'styled-components'

const H1Styled = styled.h1`
  font-family: 'Omnes';
  font-size: 40px;
  font-weight: 300;
  @media (min-width: 750px) {
    font-size: 80px;
    // padding: 60px 0;
  }
  
`

export default function PostTitle({ children }) {
  return (
    <H1Styled>
      {children}
    </H1Styled>
  )
}
