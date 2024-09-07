import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type UserInfo = {
     name: string
     nickname: string
     birthday: string
}

type Props = {
     submit: (data: UserInfo) => Promise<void>
}

const UserForm: React.FC<Props> = ({ submit }) => {
     const { register, handleSubmit } = useForm<UserInfo>()

     const onSubmit: SubmitHandler<UserInfo> = (data) => {
          console.log('Form submitted with data:', data) // デバッグ用ログ
          submit(data)
     }

     return (
          <form onSubmit={handleSubmit(onSubmit)}>
               <div>
                    <label htmlFor="name">Name:</label>
                    <input id="name" {...register('name')} required />
               </div>
               <div>
                    <label htmlFor="nickname">Nickname:</label>
                    <input id="nickname" {...register('nickname')} required />
               </div>
               <div>
                    <label htmlFor="birthday">Birthday:</label>
                    <input id="birthday" type="date" {...register('birthday')} required />
               </div>
               <div>
                    <button type="submit">送信</button>
               </div>
          </form>
     )
}

export default UserForm
