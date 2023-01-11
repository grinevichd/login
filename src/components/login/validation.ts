import * as Yup from 'yup';

export const validation = Yup.object({
    email: Yup.string()
        .email('Укажите корректный email адрес')
        .required('Поле обязательное'),
    password: Yup.string()
        .min(8, 'Пароль не меньше восьми символов')
        .required('Поле обязательное'),

})