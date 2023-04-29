import React from "react"
import * as S from "./style"

function RegisterForm() {
  return (
    <S.Wrapper>
      <S.FormContainer>
        <S.LoginForm>
          <S.FormTitle>Signup</S.FormTitle>
          <S.Input type="text" placeholder="ID" />
          <S.Input type="password" placeholder="Password" />
          <S.Input type="password" placeholder="Password" />
          {/* <S.Input type="password" placeholder="Password" /> */}
          <S.SubmitButton>다음 단계</S.SubmitButton>
        </S.LoginForm>
      </S.FormContainer>
    </S.Wrapper>
  )
}

export default RegisterForm
