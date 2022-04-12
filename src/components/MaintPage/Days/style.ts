import styled from 'styled-components';

export const Wrapper = styled.div`
   max-width: 100%;
   width: 100%;
   padding: 40px 35px;
   background-color: rgba(0, 0, 0, 0.75);
   border-bottom-right-radius: 5px;
   border-bottom-left-radius: 5px;
   display: flex;
   position: relative;

   @media (max-width: 930px) {
      flex-direction: column;
      align-items: center;
   }
`;

export const Today = styled.div`
   max-width: 200px;
   min-width: 200px;
   width: 100%;
   height: 120px;
   /* border: 1px solid red; */
   display: flex;

   @media (max-width: 930px) {
      margin-bottom: 10px;
   }
`;

export const TodayImgContainer = styled.div`
   width: 50%;
   height: 100%;
   padding: 0 7px;
   /* border: 1px solid blue; */
`;

export const TodayImg = styled.img`
   max-width: 100%;
   height: 100%;
   object-fit: contain;
   transform: scale(1.3, 1.3);
`;

export const TodayContent = styled.div`
   width: 50%;
   height: 100%;
   display: flex;
   justify-content: center;
   flex-direction: column;
   align-items: center;
`;

export const TodayTitle = styled.p`
   max-width: 65px;
   width: 100%;
   margin-right: 10px;
   background-color: #2d2d2d;
   color: #fff;
   padding: 5px 0 6px 0;
   border-radius: 5px;
   font-size: 20px;
   text-align: center;
   margin-bottom: 12px;
`;

export const TodayDegrees = styled.p`
   color: #fff;
   font-size: 30px;
   font-weight: 300;
`;

export const OtherDays = styled.div`
   max-width: 720px;
   width: 100%;
   height: auto;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(92px, 92px));
   grid-template-rows: auto;
   gap: 20px 15px;
   justify-items: center;
   justify-content: center;
   /* border: 1px solid beige; */
`;

export const Degress = styled.button`
   padding: 3px;
   position: absolute;
   top: 7px;
   left: 7px;
   background-color: gray;
   color: #fff;
   font-size: 18px;
   border-radius: 3px;
   opacity: 0.7;
   transition-duration: 0.3s;

   &:hover {
      opacity: 1;
   }
`

export const Empty = styled.p`
   max-width: 100%;
   width: 100%;
   text-align: center;
   color: #fff;
   opacity: 0.5;
   font-size: 25px;
`
