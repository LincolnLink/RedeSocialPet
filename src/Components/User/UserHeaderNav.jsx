import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from '../../UserContext'
import styles from './UserHeaderNav.module.css';

//import { ReactComponet as MinhasFotos } from '../../Assets/feed.svg';
//import { ReactComponet as Estatisticas } from '../../Assets/estatisticas.svg';
//import { ReactComponet as AdicionarFoto } from '../../Assets/adicionar.svg';
//import { ReactComponet as Sair } from '../../Assets/sair.svg';


const UserHeaderNav = () => {
    const [mobile, setMobile] = React.useState(null);
    const {userLogout} = React.useContext(UserContext);

    return (
        <nav className="styles.nav">
            <NavLink to="/conta" end>
                {/* <MinhasFotos /> */}
                {mobile && 'Minha Fotos'}
            </NavLink>
            <NavLink to="/conta/estatisticas">
                {/* <Estatisticas /> */}
                {mobile && 'Estatisticas'}
            </NavLink>
            <NavLink to="/conta/postar">
                {/* <AdicionarFoto /> */}
                {mobile && 'Adicionar Foto'}
            </NavLink>
            <button onClick={userLogout}>
                {/* <Sair /> */}
                {mobile && 'Sair'}
            </button>
        </nav>
    );
};

export default UserHeaderNav;