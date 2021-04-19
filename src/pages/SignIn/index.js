import React, {useState} from 'react';
import useAPI from '../../helpers/OlxAPI';
import {doLogin} from '../../helpers/AuthHendler';
import {PageArea} from './styled';
import {MensagemDeErro, PageContainer, PageTitle} from '../../components/MainComponents';

const Page = () => {
    const api = useAPI();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [lembrar, setLembrar] = useState(false);
    const [desabled, setDesabled] = useState(false);
    const [error, setError] = useState('');

    const envio = async (e) => {
        e.preventDefault();
        setDesabled(true);

        const json = await api.login(email, senha);

        if(json.error){
            setError(json.error);
        }
        else{
            doLogin(json.token, lembrar);
            window.location.href = "/";
        }

        setDesabled(false);
    }
    return(
        <PageContainer>
            <PageTitle>Login</PageTitle>
            {error &&
                <MensagemDeErro>{error}</MensagemDeErro>
            }
            <PageArea>
                <form onSubmit={envio}>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input 
                                type="email" 
                                disabled={desabled} 
                                value={email} 
                                onChange={e=>setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input 
                                type="password" 
                                disabled={desabled} 
                                value={senha} 
                                onChange={e=>setSenha(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Manter-me conectado</div>
                        <div className="area--input">
                            <input 
                                type="checkbox" 
                                disabled={desabled} 
                                checked={lembrar}
                                onChange={()=>setLembrar(!lembrar)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={desabled}>Entrar</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;