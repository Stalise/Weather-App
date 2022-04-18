import { FC, ReactChild } from 'react';

import { ModalWrapper, ModalContainer } from './style';

interface IProps {
   children: ReactChild | any,
   isModal: boolean,
   setIsModal: (data: boolean) => void
}

const Modal: FC<IProps> = ({ children, isModal, setIsModal }) => {

   if (isModal === true) {
      document.body.style.overflow = "hidden"
   } else {
      document.body.style.overflow = "visible"
   }

   const closeModal = () => {
      setIsModal(!isModal)
   }

   const closeModalContainer = (e: any) => {
      e.stopPropagation()
      if (e.target.id === 'ModalContainer') {
         setIsModal(!isModal)
      }
   }

   return (
      <ModalWrapper onClick={() => closeModal()} className={`modal ${isModal ? '_active' : ''}`}>
         <ModalContainer id='ModalContainer' onClick={(e) => closeModalContainer(e)}>
            {children}
         </ModalContainer>
      </ModalWrapper>
   );
}

export default Modal;
