import { FC } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import InputMask from "react-input-mask";

import './styleInputMask.css';
import { Form, SubmitButton, TodoInput, ContainerInput, Hint, Error, CloseButton } from './style';
import { firebaseRequests } from '../../../api/firebaseApi';

interface IProps {
   authInfo: any,
   firestore: any,
   user: any,
   setViewModal: (arg: boolean) => any,
}

interface IFormData {
   time: string,
   text: string
}

const TodoForm: FC<IProps> = ({ authInfo, firestore, user, setViewModal }) => {

   const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
   } = useForm<IFormData>({ mode: "onChange" })

   const onSubmit: SubmitHandler<IFormData> = async (data) => {
      reset({
         time: '',
         text: '',
      })

      if (user.length === 0) {
         firebaseRequests.createUserDocument(firestore, authInfo, data.text, data.time)
      } else {
         firebaseRequests.addUserTodo(firestore, authInfo, user, data.text, data.time)
      }
   }

   return (
      <Form onSubmit={handleSubmit(onSubmit)}>
         <ContainerInput>
            <Hint>Time</Hint>
            <InputMask
               {...register("time", {
                  required: true,
                  pattern: { value: /^(\d{2}:\d{2})$/, message: "Incorrect time" },
               })}
               className="input-mask"
               placeholder="Example 14:25"
               mask="99:99"
            />

            <Error className={`${errors?.time ? '_active' : ''}`}>
               {errors?.time?.message || 'Required field'}
            </Error>
         </ContainerInput>

         <ContainerInput>
            <Hint>Text</Hint>
            <TodoInput
               {...register("text", {
                  required: true,
                  maxLength: { value: 50, message: "Максимум 50 символов" },
               })}
               placeholder="Some text"
            />

            <Error className={`${errors?.text ? '_active' : ''}`}>
               {errors?.text?.message || 'Required field'}
            </Error>
         </ContainerInput>

         <SubmitButton type="submit">Create todo</SubmitButton>
         <CloseButton onClick={() => setViewModal(false)} type="button" ></CloseButton>
      </Form >
   );
}

export default TodoForm;
