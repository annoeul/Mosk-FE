import { styled } from "styled-components"

export const CategoryWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  overflow-x: scroll;
  scrollbar-width: no;
  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none;
  }

  /* width: 100%; */
`
