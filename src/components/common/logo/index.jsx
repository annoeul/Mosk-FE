import React, { useState, useEffect } from "react"
import * as S from "./style"

function Logo({ size }) {
  const [showLogo, setShowLogo] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <S.LogoWrapper>
      {showLogo ? (
        <S.LogoFadeOut>
          <S.Logo src="/img/logo.png" size={size} />
        </S.LogoFadeOut>
      ) : null}
    </S.LogoWrapper>
  )
}

export default Logo
