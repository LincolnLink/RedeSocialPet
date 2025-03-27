import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from '../../UserContext'
import styles from './UserHeaderNav.module.css';

import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {    
    const { userLogout } = React.useContext(UserContext);
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = useState(false);

    const {pathname} = useLocation();
    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    const navigate = useNavigate();
    function handleLogout(){
        userLogout();
        navigate('/login');
    }

    return (
        <>  
            {mobile && (
                <button aria-label="Menu"
                className={`${styles.mobileButton} 
                ${mobileMenu && styles.mobileButtonActive}`}
                onClick={() => setMobileMenu(!mobileMenu)}
                ></button>
            )}
            
            <nav className={`${mobile ? styles.navMobile : styles.nav} ${
                mobileMenu && styles.navMobileActive
            }`}>
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
        </>
    );
};

export default UserHeaderNav;