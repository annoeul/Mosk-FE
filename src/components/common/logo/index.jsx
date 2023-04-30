import React from "react"
import * as S from "./style"
import { Container } from "react-bootstrap"

function Logo({ size }) {
  return (
    <S.LogoWrapper>
      <S.Logo src="/img/logo.png" size={size} />
    </S.LogoWrapper>
  )
}

export default Logo
