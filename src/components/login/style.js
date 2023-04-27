import { Link } from "react-router-dom"
import styled from "styled-components"

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
`

export const Logo = styled.img`
  width: 150px;
  height: 200px;
  margin: 50px auto;
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  width: 130%;
  margin-bottom: 20px;
  padding: 15px; /* 수정 */
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 18px;
`

export const SubmitButton = styled.button`
  width: 130%;
  padding: 15px; /* 수정 */
  border-radius: 5px;
  border: none;
  background-color: green;
  color: #fff;
  font-size: 18px; /* 수정 */
  cursor: pointer;
`

export const SignUpText = styled.div`
  margin-top: 20px;
  font-size: 16px;
`

export const SignUpLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
`
