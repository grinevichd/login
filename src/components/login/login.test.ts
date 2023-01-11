import {Users} from '../../api/loginAPI';
import axios from "axios";


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


test('Write correct login and password', async () => {

    const login = {
        email: "1@mail.ru",
        password: "12345678"
    }

    const result = {
        data: {
            isLoggedIn: true
        }
    }

    mockedAxios.get.mockResolvedValue(result)
    return Users.login(login).then(data => expect(data).toEqual(result));
});
test('Write wrong login and password', async () => {

    const login = {
        email: "1@23mail.ru",
        password: "12345678523123"
    }

    const result = {message: 'неправельный логин или пароль'}


    mockedAxios.get.mockResolvedValue(result)
    return expect(Users.login(login)).rejects.toMatch('неправельный логин или пароль')
});