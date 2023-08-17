import React from 'react'
import { styled } from 'styled-components'

const Viewers = () => {
  return (
    <Container>
       <Wrap>
        {/* <img src="/images/viewers-disney.png" alt="disney" /> */}
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src='/images/videos/video-disney.mp4' type='video/mp4' />
        </video>
       </Wrap>
       <Wrap>
        <img src="/images/viewers-marvel.png" alt="marvel" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src='/images/videos/video-marvel.mp4' type='video/mp4' />
        </video>
       </Wrap>
       <Wrap>
        <img src="/images/viewers-national.png" alt="national" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src='/images/videos/video-nat.mp4' type='video/mp4' />
        </video>
       </Wrap>
       <Wrap>
        <img src="/images/viewers-pixar.png" alt="pixar" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/video-pixar.mp4" type="video/mp4" />
        </video>
       </Wrap>
       <Wrap>
        <img src="/images/viewers-starwars.png" alt="starwars" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src='/images/videos/video-starwars.mp4' type='video/mp4' />
        </video>
       </Wrap>
    </Container>
  )
}
const Container = styled.div`
margin: 30px;
padding: 30px 0px 26px;
display: flex;
justify-content: space-between;
min-width: 250px;
min-height: 150px;
flex-wrap: wrap;
`
const Wrap = styled.div`
border: 1px solid rgba(249, 249, 249, 0.8);
margin: 10px;
border-radius: 4px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
img{ width: 250px;
height: 150px;
object-fit: contain;}
`
export default Viewers
