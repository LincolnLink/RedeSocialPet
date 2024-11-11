import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";

const LoginForm = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    function handleSubmit(event){
        event.preventDeafault()
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method: 'POST',
            Headers:{
                'Contet-Type':'application/json'
            },
            body: JSON.stringify({username, password}),
        })
        .then((response) =>{
            console.log(response);
            return response.json();
        })
        .then((json) => {
            console.log(json);
        });
    }

    return (
        <>
            <div>
              LoginForms

              <h1>Login</h1>
              <form action="" >

                <Input label="Usuário" type="text" name="username" />
                <Input label="Senha" type="password" name="password" />
                <Button>Entrar</Button>
   
              </form>

              <Link to="/login/criar">Cadastro</Link>             
            </div>
        </>
    )
};

export default LoginForm;