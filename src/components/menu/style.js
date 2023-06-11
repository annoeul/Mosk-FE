import styled from "styled-components"

export const MenuWrapper = styled.div`
  margin-top: 15px;
  padding-bottom: 10px;
  width: 100%;
  border: 3px solid #c3a758;
  height: 70vh;
  overflow-y: auto;
  background-color: #e8e6e6;
  border-radius: 25px;
`
export const Circle = styled.div`
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  bottom: 102px;
`

export const LeftCircle = styled(Circle)`
  left: 0;
`

export const RightCircle = styled(Circle)`
  right: 0;
`
// style={{ height: "70vh", overflowY: "auto", backgroundColor: "#e8e6e6", borderRadius: "25px" }}
