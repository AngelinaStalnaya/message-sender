import * as z from 'zod';

export const MessageFormDataSchema = z.object({
    name: z.string().trim().min(2, 'Имя должно быть минимум 2 символа'),
    phone: z.string().trim().regex(/^(80|\+375)\d{9}$/, 'Телефон должен быть в формате номера для Беларуси (+375*/80*)' ),
    message: z.string().trim().min(2, 'Сообщение должно быть минимум 2 символа')
})

export type MessageFormData = z.infer<typeof MessageFormDataSchema>