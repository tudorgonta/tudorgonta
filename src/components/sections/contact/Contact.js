import styled from "styled-components"
import * as palette from '../../../styleVariables';

const Section = styled.section`
  font-family: Ayuthaya;
  width: 68%;
  margin: 13em auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  z-index: 2;
  letter-spacing: 0.02em;
  text-align: center;
`
const H2 = styled.h2`
  font-weight: normal;
  font-size: 1.75em;
  opacity: 0.8;
`
const H1 = styled.h1`
  font-weight: normal;
  font-size: 3em;
  margin: 0.3em 0;
  margin-top: 0.1em;
  opacity: 13;
`
const Line = styled.div`
  opacity: 0.8;
  content: "";
  display: block;
  width: 28em;
  height: 2px;
  margin: 0 auto;
  background-color: ${palette.GOLD_COLOR};
  margin-bottom: 2em;
  z-index: 2;
`
const Desc = styled.p`
  opacity: 0.8; 
  margin: 0 auto;
  margin-bottom: 3em;
  width: 50%;
`
const Form = styled.section`

`
const InputName = styled.section`

`
const InputEmail = styled.section`

`
const InputComm = styled.section`

`
const Submit = styled.section`
  cursor: pointer
`
const Contact = () => {
  return (
    <Section>
      <H2>What`s Next?</H2>
      <H1>Get In Touch</H1>
      <Line />
      <Desc>I`m currently looking for any new opportunities, my inbox is
            always open. Whether you have a question or just want to say hi,
            I`ll try my best to get back to you!
      </Desc>
      <Form>
        <InputName />
        <InputEmail />
        <InputComm />
        <Submit>Say Hello</Submit>
      </Form>
    </Section>
  )
}

export default Contact