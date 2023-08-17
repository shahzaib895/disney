import React, { useEffect } from 'react'
import { styled } from 'styled-components'


const Login = () => {
useEffect(()=>{
  console.log('helo')
})
  return (
    <Container>
        <BgImg></BgImg>
        <Content>
          <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp> GET ALL THERE</SignUp>
            <Description>Get Premier Access to Raya and the Last Dragon with a Disney+ subscription. As of 03/26/23, and The Disney Bundle will increse by $1 </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
          </CTA>
        </Content>
    </Container>
  )
}

const Container = styled.section`
// overflow: hidden;
idsplay: flex;
flex-direction: column;
text-aloign: center;
height: 100vh
`;
const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-bottom: 10vw;
height: 100vh;
box-sizing: border-box;
position-relative;
padding: 80px 40px;
height: 100%;
`;
const BgImg = styled.div`
background-image: url("/images/login-background.jpg");
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
top:0;
left: 0;
right: 0;
z-index: -1;
position: absolute;
`;
const CTA = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-right: auto;
margin-left: auto;
margin-top: 0;
margin-bottom: 2vw;
max-width: 650px;
flex-direction: column;
transition-timing-function: ease-out;
transition: opacity 0.2s;
width: 100%
`;
const CTALogoOne = styled.img`
display: block;
min-height: 100px;
max-width: 600px;
width: 100%;
margin-bottom: 12px;
`;
const SignUp = styled.a`
color:#f9f9f9;
background-color: #0063e5;
font-size: 18px;
font-weight: bold;
padding: 16.5px 0;
margin-bottom: 12px;
width: 100%;
border: 1px solid tranparent;
border-radius: 4px;
letter-spacing: 1.5px;
text-align: center;
&:hover{
  background-color: #0483ee
}
`
const Description = styled.p`
font-size: 14px;
line-height: 1.5;
letter-spacing: 1.5px;
text-align: center;
margin: 0 0 24px;
color: hsla(0, 0%, 95.3%, 1)
`;
const CTALogoTwo = styled.img`
display: block;
max-width: 600px;
width: 100%;
margin-bottom: 20px;
vertical-align: bottom;
display: inline-block;
`;
export default Login
