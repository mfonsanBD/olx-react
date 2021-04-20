import React, {useState, useEffect} from 'react';
import useAPI from '../../helpers/OlxAPI';
import {doLogin} from '../../helpers/AuthHendler';
import {PageArea} from './styled';
import {MensagemDeErro, PageContainer, PageTitle} from '../../components/MainComponents';

const Page = () => {
    const api = useAPI();

    const [nome, setNome] = useState('');
    const [estado, setEstado] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [desabled, setDesabled] = useState(false);
    const [error, setError] = useState('');

    const [listaDeEstados, setListaDeEstados] = useState([]);

    useEffect(()=>{
        const getStates = async (e) => {
            const sList = await api.getStates();
            setListaDeEstados(sList);
        }
        getStates();
    }, [])

    const envio = async (e) => {
        e.preventDefault();
        setDesabled(true);
        setError('');

        if(senha !== confirmaSenha){
            setError('As senhas não coincidem');
            setDesabled(false);
            return;
        }

        const json = await api.cadastro(nome, estado, email, senha);

        if(json.error){
            setError(json.error);
        }
        else{
            doLogin(json.token);
            window.location.href = "/";
        }

        setDesabled(false);
    }
    return(
        <PageContainer>
            <PageTitle>Cadastre-se</PageTitle>
            {error &&
                <MensagemDeErro>{error}</MensagemDeErro>
            }
            <PageArea>
                <form onSubmit={envio}>
                    <label className="area">
                        <div className="area--title">Nome Completo</div>
                        <div className="area--input">
                            <input 
                                type="text" 
                                disabled={desabled} 
                                value={nome} 
                                onChange={e=>setNome(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                            <select required value={estado} onChange={e=>setEstado(e.target.value)}>
                                <option></option>
                                {listaDeEstados.map((i, k)=>
                                    <option key={k} value={i._id}>{i.name}</option>
                                )}
                            </select>
                        </div>
                    </label>
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
                        <div className="area--title">Confirma Senha</div>
                        <div className="area--input">
                            <input 
                                type="password" 
                                disabled={desabled} 
                                value={confirmaSenha} 
                                onChange={e=>setConfirmaSenha(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={desabled}>Finalizar Cadastro</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;