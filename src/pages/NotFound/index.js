import React from 'react';
import {Link} from 'react-router-dom';

const Page = () => {
    return(
        <div>
            <h1>Página Não Encontrada</h1>
            <Link to="/">Voltar a página inicial</Link>
        </div>
    );
}

export default Page;