import React from "react"
import * as S from "./style"
import { Link } from "react-router-dom"

function LoginForm() {
  return (
    <S.Wrapper>
      <S.FormContainer>
        <S.LoginForm>
          <S.FormTitle>Login</S.FormTitle>
          <S.Input type="text" placeholder="ID" />
          <S.Input type="password" placeholder="Password" />
          <S.SubmitButton>Login</S.SubmitButton>
          <p>
            회원이 아니신가요? <Link to="/register">회원가입</Link>
          </p>
        </S.LoginForm>
      </S.FormContainer>
    </S.Wrapper>
  )
}

export default LoginForm
