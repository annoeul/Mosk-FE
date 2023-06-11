import { styled } from "styled-components"

export const CircleDiv = styled.div`
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
`

export const LeftCircleDiv = styled(CircleDiv)`
  border-left: none;
  border-top: none;
`

export const RightCircleDiv = styled(CircleDiv)`
  right: 0;
`
