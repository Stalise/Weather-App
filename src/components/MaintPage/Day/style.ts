import styled from "styled-components";

export const Wrapper = styled.div`
   /* border: 1px solid wheat; */
   max-width: 100px;
   width: 100%;
   height: 120px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const Title = styled.p`
   max-width: 45px;
   width: 100%;
   background-color: #2d2d2d;
   color: #fff;
   padding: 5px 0 6px 0;
   border-radius: 5px;
   font-size: 14px;
   text-align: center;
   margin-bottom: 5px;
`;

export const ImgContainer = styled.div`
   width: 50%;
   height: 100%;
`;

export const Img = styled.img`
   max-width: 100%;
   height: 100%;
   object-fit: contain;
   transform: scale(1.5, 1.5);
`;

export const Degrees = styled.p`
   color: #fff;
   font-size: 30px;
   font-weight: 300;
   font-size: 20px;
`;
