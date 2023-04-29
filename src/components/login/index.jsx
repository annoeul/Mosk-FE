import React from "react"
import * as S from "./style"

function LoginForm() {
  return (
    <S.Wrapper>
      <S.FormContainer>
        <S.LoginForm>
          <S.FormTitle>Login</S.FormTitle>
          <S.Input type="text" placeholder="ID" />
          <S.Input type="password" placeholder="Password" />
          <S.SubmitButton>Login</S.SubmitButton>
          <p>회원이 아니신가요? 회원가입</p>
        </S.LoginForm>
      </S.FormContainer>
    </S.Wrapper>
  )
}

export default LoginForm
