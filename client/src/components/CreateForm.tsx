import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { MessageFormDataSchema, type MessageFormData } from '../../../types/MessageFormData';

const CreateForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting } }
        =
        useForm<MessageFormData>({
            resolver: zodResolver(MessageFormDataSchema)
        });

    const onSumbit: SubmitHandler<MessageFormData> = async (data: MessageFormData) => {
        try {
            const response = await fetch('http://localhost:5500/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Сообщение отправлено успешно')
                reset()
            }
        } catch (err) {
           console.log('Сообщение не отправлено из-за ошибки сервера', err)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSumbit)}
            className='flex flex-col gap-3 p-1 m-2 max-w-[500px]'
        >
            <h2 className='text-zinc-600 font-bold text-2xl'>Форма создания сообщения</h2>
            <div className='flex flex-col w-full'>
                <input {...register('name')}
                    id='name'
                    className='border-2 border-amber-950 rounded-2xl min-w-[300px] pz-1 px-2 hover:border-amber-400'
                    placeholder='Введите имя' />
                <p className='font-light text-red-700 text-sm'>
                    {errors?.name?.message}
                </p>
            </div>

            <div className='flex flex-col w-full'>
                <input {...register('phone')}
                    id='phone'
                    className='border-2 border-amber-950 rounded-2xl min-w-[300px] pz-1 px-2 hover:border-amber-400'
                    placeholder='Введите номер телефона' />
                <p className='font-light text-red-700 text-sm'>
                    {errors?.phone?.message}
                </p>
            </div>
            <div className='flex flex-col w-full'>
                <textarea {...register('message')}
                    id='message'
                    className='border-2 border-amber-950 rounded-2xl min-w-[300px] pz-1 px-2 hover:border-amber-400'
                    placeholder='Введите сообщение' />
                <p className='font-light text-red-700 text-sm'>
                    {errors?.message?.message}
                </p>
            </div>

            <button disabled={isSubmitting}
                type='submit'
                className=' text-lg border-2 rounded-2xl max-w-[150px] border-amber-950 text-amber-950 hover:border-amber-400 hover:text-amber-400 disabled:text-grey-700 disabled:border-grey-700'>
                {isSubmitting ? 'Отправка...' : 'Отправить'}
            </button>
        </form>
    )
}

export default CreateForm;