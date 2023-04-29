import styled from "styled-components"

export const Wrapper = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: red; */
`

export const Logo = styled.div`
  justify-content: flex-end;
  align-items: flex-end;
  background-image: url("/img/logo.png");
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100vh;
  padding-top: 66.66%; /* 3:2 aspect ratio */
  margin-right: 20px;
`
