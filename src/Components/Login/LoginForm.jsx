import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
import useForm from "../../Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";


const LoginForm = () => {
    //const username = useForm('email');
    const username = useForm();
    const password = useForm()
    //console.log(username);

    React.useEffect(() => {
        //const token = window.localStorage.getItem('token');
        // if(token){
        //     getUser(token);
        // }
    }, []);

    async function getUser(token){
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
    }
    
    async function handleSubmit(event){
        event.preventDefault();

        if(username.validate() && password.validate()){           
            const {url, options} = TOKEN_POST({
                username : username.value,
                password : password.value,
            });

            console.log("url: ", url);
            console.log("options: ", options);

            const response = await fetch(url, options);
            const json = await response.json();
            console.log("erro??: ", json);
            window.localStorage.setItem('token', json.token);
            
            // fetch(url, options)
            // .then((response) =>{
            //     console.log(response);
            //     return response.json();
            // })
            // .then((json) => {
            //     console.log(json);
            // });
        }
    }

    return (
        <section>                        
              <h1>Login</h1>
              {/* className={styles.form} */}
              <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" name="username" {...username} />
                <Input label="Senha" type="password" name="password" {...password} />
                <Button type="submit">Entrar</Button>   
              </form>

              <Link to="/login/criar">Cadastro</Link>
        </section>
    )
};

export default LoginForm;