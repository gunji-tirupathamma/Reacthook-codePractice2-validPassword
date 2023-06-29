// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  background-size: cover;
  height: 100vh;
`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
  background-size: cover;
  height: 50vh;
  width: 50vw;
  border-radius: 10px;
`

export const Heading = styled.h1`
  font-size: 35px;
  font-family: Roboto;
  font-weight: bold;
  color: #ffffff;
`

export const Description = styled.p`
  font-size: 18px;
  font-family: Roboto;
  color: #f8fafc;
`

export const InputPassword = styled.input`
  background-color: #edeeff;
  outline: 0px;
  border-width: 0px;
  height: 30px;
  width: 50%;
`

export const ErrorMessage = styled.p`
  font-size: 16px;
  font-family: Roboto;
  color: #ef4444;
  text-align: center;
`
