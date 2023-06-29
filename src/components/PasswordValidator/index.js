// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  PasswordContainer,
  Heading,
  Description,
  InputPassword,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [errorText, setErrorText] = useState(
    'Your password must be at least 8 characters',
  )

  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    if (event.target.value.length >= 8) {
      setErrorText('')
    }
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <InputPassword
          type="password"
          onChange={onChangePassword}
          value={password}
        />
        <ErrorMessage>{errorText}</ErrorMessage>
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
