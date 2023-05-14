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

// style.js

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;

  h2 {
    margin-top: 0;
  }

  p {
    margin-bottom: 20px;
  }

  h3 {
    margin-top: 20px;
  }

  ul {
    margin-bottom: 20px;
    padding-left: 20px;
  }

  button {
    background-color: #2196f3;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
`
