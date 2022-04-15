import styled from "styled-components";

export const ModalWrapper = styled.div`
   position: fixed;
   width: 100%;
   height: 100vh;
   top: 0;
   left: 0;
   padding: 0;
   background-color: rgba(0, 0, 0, 0.2);
   display: none;
   align-items: center;
   z-index: 110;
   &._active {
      display: flex;
   }
`;

export const ModalContainer = styled.div`
   flex: 1 1 auto;
   display: flex;
   justify-content: center;
`
