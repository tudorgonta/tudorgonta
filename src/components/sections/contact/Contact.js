import styled, {keyframes} from "styled-components"
import * as palette from '../../../styleVariables';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';

const Section = styled.section`
overflow-x:hidden;
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
  margin-top: 10em;
  &::-webkit-scrollbar-track {
    display: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }
  @media ${palette.device.tablet} { 
    width: 80%;
  }
`
const H2 = styled.h2`
  font-weight: normal;
  font-size: 1.75em;
  opacity: 0.8;
  @media ${palette.device.tablet} { 
    font-size: 1.5em;
  }
`
const H1 = styled.h1`
  font-weight: normal;
  font-size: 3em;
  margin: 0.3em 0;
  margin-top: 0.1em;
  opacity: 13;
  @media ${palette.device.tablet} { 
    font-size: 2.25em;
  }
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
  @media ${palette.device.tablet} { 
    width: 100%;
  }
`
const Desc = styled.p`
  opacity: 0.8; 
  margin: 0 auto;
  margin-bottom: 3em;
  width: 57%;
  font-size: 0.9em;
  @media ${palette.device.tablet} { 
    width: 100%;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 45%;
  align-items: center;
  margin: 0 auto;
  @media ${palette.device.tablet} { 
    width: 100%;
    margin-left: 3.3%;
  }
  @media ${palette.device.laptop} {
  }
`
const InputName = styled.input`
overflow-x:hidden;
  width: 80%;
  padding: 0.65em 1.5em;
  outline: none;
  border:none;
  font-size: 0.95em;
  @media ${palette.device.tablet} { 
    padding: 0.65em 0.8em;
  }
`
const Fieldset = styled.fieldset`
overflow-x:hidden;
  width: 100%;
  margin-right: 1em;
  border: 1.5px solid ${palette.GOLD_COLOR};
  margin-left: 0;
  padding-right: 0;
  border-radius: 0.2em;
  transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);
  opacity: 80%;
  &:hover {
    opacity: 100%;
  }
  &:focus {
    opacity: 100%;
    outline: none;
  }
`
const Fieldset2 = styled.fieldset`
overflow-x:hidden;
  width: 96%;
  margin-right: 1em;
  border: 1.5px solid ${palette.GOLD_COLOR};
  margin-left: 0;
  padding-right: 0;
  border-radius: 0.2em;
  margin-bottom: 2em;
  transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);
  opacity: 80%;
  &:hover {
    opacity: 100%;
  }
  &:focus {
    opacity: 100%;
    outline: none;
  }
`
const Legend = styled.legend`
  padding: 0 0.2em;
  text-align: left;
  margin-left: 0.8em;
  font-size: 0.9em;
`
const InputEmail = styled.input`
overflow-x:hidden;
  width: 80%;
  padding: 0.65em 1.5em;
  outline: none;
  border:none;
  font-size: 0.95em;
  @media ${palette.device.tablet} { 
    padding: 0.65em 0.8em;
  }
`
const InputComm = styled.textarea`
overflow-x:hidden;
  width: 87.5%;
  padding: 0.65em 1.5em;
  outline: none;
  border:none;
  font-size: 0.95em;
  margin-bottom: 2em;
  resize: none;
  height: 4em;
  text-decoration: none;
  @media ${palette.device.tablet} { 
    padding: 0.65em 0.8em;
  }
`
const Submit = styled.button`
  font-size: 1em;
  border: 1.4px solid ${palette.GOLD_COLOR};
  border-radius: 0.2em;
  padding: 0.65em 1.5em;
  cursor: pointer;
  line-height: 1;
  text-decoration: none;
  transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);
  opacity: 80%;
  &:hover {
    background-color: ${palette.CONTAINER_COLOR};
    opacity: 100%;
  }
  ${palette.TRANSITION_FIX()}
`
const Wrapper = styled.div`
overflow-x:hidden;
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 1em;
`
const PopUpAnimation = keyframes`
  0% { transform: translateX(-100%);}
  100% { transform: translateX(0);}
`
const Success = styled.div`
  position: absolute;
  margin-top: 25%;
  background-color: ${palette.CONTAINER_COLOR};
  padding: 2em;
  font-size: 0.8em;
  color: rgb(249, 229, 201, 0.8);
  width: 15%;
  line-height: 1.25em;
  box-shadow: 0 10px 30px -15px #071e21;
  transition: all 0.21s cubic-bezier(0.645,0.045,0.355,1);
  opacity: 80%;
  animation: ${PopUpAnimation} 0.65s ease-in forwards;
  &:hover{
    box-shadow: 0 20px 30px -15px #071e21;
    color: rgb(249, 229, 201, 1);
    opacity: 100%;
  }
  @media ${palette.device.tablet} { 
    margin-top: 95%;
    width: 35%;
    z-index: 30;
    opacity: 100%;
    padding: 3em;
  }

`
const H3 = styled.h3`
  font-weight: bold;
  margin-bottom: 1em;
  font-size: 1.6em;
`
const Text = styled.p`
  margin-bottom: 1.5em;
  font-size: 1.4em;
  opacity: 90%;
`
const Contact = () => {
  const form = useRef();

  const [open,setOpen] = useState(false)

  const handleShow = (e) => setOpen(current => !current);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7ss4ymc', 'template_usmxox3', form.current, 'gOVlutLHH7xhCQr-7')
      .then((result) => {
          handleShow();
      }, (error) => {
          alert('Oops, something went wrong :(');
      });
     e.target.reset(); 
  };
  return (
    <>
    {open && (
    <Success className="headline" style={{visibility: open ? "visible" : "hidden", display: open ? "block" : "none"}}>
      <H3>Thank you!</H3>
      <Text>I`ve recieved your message and will get back to you as soon as possible.</Text>
      <Submit style={{width: "80%"}} onClick={(e) => handleShow()} > OK, CLOSE</Submit>
    </Success>
    )}
    <Section>
      <Fade bottom duration={palette.DURATION} delay={palette.SCROLL_DELAY}> 
        <H2>What`s Next?</H2>
        <H1>Get In Touch</H1>
        <Line />
        <Desc>I`m currently looking for any new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I`ll try my best to get back to you!
        </Desc>
        <Form ref={form} onSubmit={sendEmail}>
          <Wrapper>
            <Fieldset>
              <Legend>Name</Legend>
              <InputName spellcheck="false" type="text" name="name" required />
            </Fieldset>
            <Fieldset>
              <Legend>E-mail</Legend>
              <InputEmail spellcheck="false" type="email" name="email" required />
            </Fieldset>
          </Wrapper>
          <Fieldset2>
              <Legend spellcheck="false">Comments</Legend>
            <InputComm name="message" />
          </Fieldset2>
          <Submit type="submit" title="Say Hello!">Say Hello!</Submit>
        </Form>
      </Fade>
    </Section>
    </>
  )
}

export default Contact