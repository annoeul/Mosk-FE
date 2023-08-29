import { styled } from "styled-components"

export const CartWrapper = styled.div`
  /* display: flex; */
  /* align-items: center; */
  position: absolute;
  cursor: pointer;
  right: 1%;
  padding: 10px;

  /* justify-content: flex-end; */
  /* position: relative; */
  /* text-align: right;
  padding-top: 15px; */
  /* padding-bottom: 130px; */
  /* bottom: 60px; */
  /* right: 10px; */
  /* border: 1px solid black; */
`
export const CartCount = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
`

export const CartModalProduct = styled.div`
  background-color: white;
  border-radius: 10px;
  max-height: 70vh;
  width: 100%;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: #000;
  display: flex;
  flex-direction: column;
`

export const CartModalTitle = styled.h1`
  padding: 12px;
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
  /* align-items: center; */
  /* margin: 0 auto; */
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
