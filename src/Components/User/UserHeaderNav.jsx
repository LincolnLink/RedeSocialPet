import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from '../../UserContext'
import styles from './UserHeaderNav.module.css';

import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';


const UserHeaderNav = () => {
    const [mobile, setMobile] = React.useState(null);
    const { userLogout } = React.useContext(UserContext);
    const navigate = useNavigate();

    function handleLogout(){
        userLogout();
        navigate('/login');
    }

    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end className={({ isActive }) => isActive ? styles.active : undefined}>
                <MinhasFotos />
                {mobile && 'Minha Fotos'}
            </NavLink>
            <NavLink to="/conta/estatisticas" className={({ isActive }) => isActive ? styles.active : undefined}>
                <Estatisticas />
                {mobile && 'Estatisticas'}
            </NavLink>
            <NavLink to="/conta/postar" className={({ isActive }) => isActive ? styles.active : undefined}>
                <AdicionarFoto />
                {mobile && 'Adicionar Foto'}
            </NavLink>
            <button onClick={handleLogout}>
                <Sair />
                {mobile && 'Sair'}
            </button>
        </nav>
    );
};

export default UserHeaderNav;