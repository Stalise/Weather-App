import styled from "styled-components";

export const Wrapper = styled.div`
   background-color: transparent;
`;

export const Label = styled.label`
   display: block;
   position: relative;
   cursor: pointer;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   &:not(:last-child) {
      margin-bottom: 10px;
   }
`;

export const Field = styled.span`
   display: block;
   width: 17px;
   height: 17px;
   background-color: #fff;
   border-radius: 3px;
   border: 2px solid darkgray;
   position: relative;
   &._active {
      background-color: #2d2d2d;
   }
`;

export const Checkbox = styled.input`
   display: none;
`;

export const Text = styled.span`
   display: inline-block;
   color: white;
   font-size: 22px;
   letter-spacing: 0.3px;
   margin-right: 10px;
`;
