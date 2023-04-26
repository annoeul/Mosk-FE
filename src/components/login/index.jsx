import React, { useState, useEffect } from "react"
import * as S from "./style"
import { Link } from "react-router-dom"

function LoginForm() {
  const [showLoginForm, setShowLoginForm] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoginForm(true)
    }, 2000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <S.LoginPageContainer>{!showLoginForm && <S.Logo src="/img/1.png" alt="logo" />}</S.LoginPageContainer>
      {showLoginForm && (
        <S.LoginPageContainer>
          <S.Logo src="/img/1.png" alt="logo" />
          <S.LoginFormContainer>
            <S.Input type="text" placeholder="아이디" />
            <S.Input type="password" placeholder="비밀번호" />
            <S.SubmitButton>로그인</S.SubmitButton>
          </S.LoginFormContainer>
          <S.SignUpText>
            회원이 아니신가요? <S.SignUpLink to="/register">회원가입</S.SignUpLink>
          </S.SignUpText>
        </S.LoginPageContainer>
      )}
    </>
  )
}

export default LoginForm
