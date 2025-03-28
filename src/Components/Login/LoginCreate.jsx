import React from "react";
import Input from '../Forms/Input/Input.jsx'
import Button from '../Forms/Button/Button.jsx'
import { USER_POST } from "../../api.jsx";
import useFetch from '../../Hooks/useFetch.jsx';
import useForm from '../../Hooks/useForm.jsx';
import Error from "../Error/Error";
import {UserContext} from '../../UserContext.jsx'

const LoginCreate = () => {
    const username = useForm();
    const email = useForm('email');
    const password = useForm(); //'password'

    const { userLogin } = React.useContext(UserContext);
    const {loading, error, request} = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        const {url, options} = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        })
        const { response } = await request(url, options);

        // if(response.ok){
        //     userLogin(username.value, password.value)
        // }
        
        // console.log("teste: ", response);

    }
    
    return (
        <section className="animeLeft">
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Email" type="email" name="email" {...email} />
                <Input label="Senha" type="text" name="password" {...password} />
                {loading ? (
                    <Button disabled>Cadastrando...</Button>
                ) : (
                    <Button>Cadastrar</Button>
                )}
                <Error error={error} />
            </form>
        </section>
    )
};

export default LoginCreate;