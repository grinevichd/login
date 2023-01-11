// делаю фейковый запрос на api

export class Users {
    static login(payload: loginType) {

        const data = {
            email: "1@mail.ru",
            password: "12345678"
        }

        //если пароль и login которые придут в аргументах будут равны
        //тогда верну resolve иначе reject
        // для тестов делаю иметацию запроса на сервер

        return new Promise((resolve, reject) => {
            if (payload.email === data.email && payload.password === data.password) {
                setTimeout(() => {
                    resolve({
                            data: {
                                isLoggedIn: true
                            }
                        }
                    )
                }, 1000)

            } else {
                setTimeout(() => {
                    reject('неправельный логин или пароль')
                }, 1000)

            }
        })
    }
}

type loginType = {
    email: string
    password: string
}

