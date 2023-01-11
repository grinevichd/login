import React from 'react';
import {useFormik} from 'formik';
import style from './Login.module.scss'
import {validation} from "./validation";
import {Users} from '../../api/loginAPI';

export const Login = () => {


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validation,
        onSubmit: values => {
            Users.login(values)
                .catch((e) => {
                    // ловлю оишбку чтобы не падала в консоль
                    console.log(e)
                })
        },
    });

    return (
        <div className={style.container}>
            <div className={style.info}>
                <h3>Вход</h3>
                <p>Для существующих пользователей</p>
            </div>
            <form onSubmit={formik.handleSubmit} className={style.formContainer}>
                <label htmlFor="email" className={style.labelText}>E-Mail : <span
                    className={style.star}>*</span></label>
                <input
                    className={style.input}
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <span className={style.errorText}>{formik.errors.email}</span>
                ) : <span className={style.errorText}/>}

                <label htmlFor="password" className={style.labelText}>Пароль : <span
                    className={style.star}>*</span></label>
                <input
                    className={style.input}
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}

                />
                {formik.touched.password && formik.errors.password ? (
                    <span className={style.errorText}>{formik.errors.password}</span>
                ) : <span className={style.errorText}/>}

                <button className={style.button} type="submit">Войти в систему</button>
            </form>
        </div>
    );
};

