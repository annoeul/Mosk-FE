import { styled } from "styled-components"

export const CartWrapper = styled.div`
  /* position: relative; */
  text-align: right;
  padding-top: 15px;
  /* padding-bottom: 130px; */
  /* bottom: 60px; */
  /* right: 10px; */
  /* border: 1px solid black; */
`
export const CartCount = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff0000;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  margin-right: 20px;
`

export const CartModalTitle = styled.h1`
  padding: 20px;
  text-align: center;
  font-weight: 900;
  background-color: #ccc;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ProductImg = styled.img`
  width: ${({ size }) => size}px;
  margin: 0 20px;
  /* display: flex; */
  /* align-self: flex-end; */
`
export const TotalPrice = styled.div`
  text-align: center;
  align-items: center;
  margin: 0 auto;
  /* padding-top: 10px; */
  font-size: 22px;
  /* background-color: #ddd; */
  padding: 15px;
  position: sticky;
  bottom: 0;
  background-color: #e8e9eb;
`

// export const CartTitle = styled.div`

// `
