import React from "react";
import { Link } from "react-router-dom";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
import useForm from "../../Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";
import { UserContext } from "../../UserContext";

const LoginForm = () => {    
    const username = useForm();
    const password = useForm();

    const {userLogin} = React.useContext(UserContext); 
    
    async function handleSubmit(event){
        event.preventDefault();

        if(username.validate() && password.validate()){           
           userLogin(username.value, password.value);
            
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