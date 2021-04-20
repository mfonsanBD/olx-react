import React from 'react';
import {Link} from 'react-router-dom';
import {HeaderArea} from './styled';

import {isLogged, doLogout} from '../../../helpers/AuthHendler';

const Header = () => {
    let logged = isLogged();

    const sair = () => {
        doLogout();
        window.location.href = '/';
    }

    return(
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo-1">O</span>
                        <span className="logo-2">L</span>
                        <span className="logo-3">X</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li><Link to="/my-account">Minha Conta</Link></li>
                                <li><button onClick={sair}>Sair</button></li>
                                <li><Link to="/add-an-ad" className="button">Publicar Anúncio</Link></li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li><Link to="/signin">Login</Link></li>
                                <li><Link to="/signup">Cadastrar</Link></li>
                                <li><Link to="/signin" className="button">Publicar Anúncio</Link></li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;