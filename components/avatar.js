import styled from 'styled-components'

const AvatarStyle = styled.div`
  .avatar__img {
    width: 100px;
    border-radius: 50%;
  }
  .avatar__name {
    font-style: italic;
  }
`


export default function Avatar({ name, picture }) {
  return (
    <AvatarStyle>
      <img
        src={picture.url}
        className="avatar__img"
        alt={name}
      />
      <div className="avatar__name">{name}</div>
    </AvatarStyle>
  )
}
