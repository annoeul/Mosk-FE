import { styled } from "styled-components"

export const ProductWrapper = styled.div`
  position: relative;
  top: 10px;
  right: 4px;
  display: flex;
  border-bottom: 1px dotted black;
  padding: 10px;
  margin-top: 10px;
  justify-content: space-between;
  width: 100%;
`

export const ProductImg = styled.img`
  width: ${({ size }) => size}px;
  display: flex;
  align-self: flex-end;
`

export const ProductName = styled.h1`
  /* color: white; */
  /* position: relative; */
  /* left: 20px; */
  /* right: 125px; */
  /* top: 6px; */
  font-size: 20px;
  /* text-align: start; */
  /* padding-left: 120px; */
`
export const ProductPrice = styled.h3`
  align-items: center;
`
