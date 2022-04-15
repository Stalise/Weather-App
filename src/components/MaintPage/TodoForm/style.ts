import styled from 'styled-components';

export const Form = styled.form`
   margin: 0 10px;
   max-width: 400px;
   width: 100%;
   padding: 20px;
   background-color: #fff;
   border-radius: 5px;
   position: relative;
`;

export const ContainerInput = styled.label`
   display: block;
   position: relative;
   &:not(:last-child) {
      margin-bottom: 30px;
   }
`

export const TodoInput = styled.input`
      max-width: 340px;
      width: 100%;
      height: 50px;
      font-size: 18px;
      padding: 4px 0 0 10px;
      background-color: #f8f8f8;
      border: 2px solid transparent;
      transition: border 0.3s;
      &::placeholder {
         color: #121212;
         opacity: 0.4;
      }
      &:hover {
         border: 2px solid gray;
      }
      &:focus {
         border: 2px solid black;
         font-size: 18px;
      }
`

export const Hint = styled.span`
      display: inline-block;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 5px;
`

export const Error = styled.span`
      max-width: 340px;
      font-weight: 400;
      color: #f25c5c;
      position: absolute;
      bottom: -17px;
      left: 0;
      font-size: 14px;
      display: none;
      &._active {
         display: block;
      }
`

export const SubmitButton = styled.button`
   margin: 0 auto;
   display: block;
   padding: 0 15px;
   height: 40px;
   font-size: 20px;
   color: #fff;
   letter-spacing: 0.5px;
   text-transform: uppercase;
   background-color: gray;
   border-radius: 3px;
`;

export const CloseButton = styled.button`
   display: block;
   position: absolute;
   top: 3px;
   right: 3px;
   width: 20px;
   height: 20px;

   &:hover:before {
      color: #2d2d2d;
   }
   
   &:before {
      content: '✖';
      position: absolute;
      top: -6px;
      left: 0;
      font-size: 22px;
      color: gray;
      transition: color 0.3s;
   }
`;
