import React, {useState, useEffect, useRef} from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import useAPI from '../../helpers/OlxAPI';
import {PageArea} from './styled';
import {MensagemDeErro, PageContainer, PageTitle} from '../../components/MainComponents';
import { useHistory } from 'react-router';

const Page = () => {
    const api           = useAPI();
    const fileField     = useRef();
    const history       = useHistory();

    const [titulo, setTitulo]               = useState('');
    const [categoria, setCategoria]         = useState('');
    const [preco, setPreco]                 = useState('');
    const [negociavel, setNegociavel]       = useState(false);
    const [descricao, setDescricao]         = useState('');

    const [listaCat, setListaCat]           = useState([]);

    const [desabled, setDesabled]           = useState(false);
    const [error, setError]                 = useState('');

    useEffect(()=>{
        const getCats = async (e) => {
            const catList = await api.getCategorias();
            setListaCat(catList);
        }
        getCats();
        // eslint-disable-next-line
    }, []);

    const envio = async (e) => {
        e.preventDefault();
        setDesabled(true);
        setError('');

        let errors = [];

        if(!titulo.trim()){
            errors.push('O campo TÍTULO é obrigatório.');
        }
        if(!categoria){
            errors.push('O campo CATEGORIA é obrigatório.');
        }

        if(errors.length === 0){
            const formulario = new FormData();

            formulario.append("title", titulo);
            formulario.append("price", preco);
            formulario.append("priceneg", negociavel);
            formulario.append("desc", descricao);
            formulario.append("cat", categoria);

            if(fileField.current.files.length > 0){
                for(let i=0; i < fileField.current.files.length; i++){
                    formulario.append("img", fileField.current.files[i]);
                }
            }

            const json = await api.postAd(formulario);

            if(!json.error){
                history.push(`/ad/${json.id}`);
                return;
            }
            else{
                setError(json.error);
            }

        }
        else{
            setError(errors.join("\n"));
        }

        setDesabled(false);
    }

    const mascaraDePreco = createNumberMask({
       prefix: 'R$ ',
       includeThousandsSeparator: true,
       thousandsSeparatorSymbol: '.',
       allowDecimal: true,
       decimalSymbol:',' 
    });

    document.title = "Poste seu anúncio - Clone OLX";

    return(
        <PageContainer>
            <PageTitle>Poste seu anúncio</PageTitle>
            {error &&
                <MensagemDeErro>{error}</MensagemDeErro>
            }
            <PageArea>
                <form onSubmit={envio}>
                    <label className="area">
                        <div className="area--title">Título</div>
                        <div className="area--input">
                            <input 
                                type="text" 
                                disabled={desabled} 
                                value={titulo} 
                                onChange={e=>setTitulo(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Categoria</div>
                        <div className="area--input">
                            <select
                                required
                                value={categoria}
                                disabled={desabled}
                                onChange={e=>setCategoria(e.target.value)}
                            >
                                <option></option>
                                {listaCat.map((i, k)=>
                                    <option key={k} value={i._id}>{i.name}</option>
                                )}
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço</div>
                        <div className="area--input">
                            <MaskedInput
                                mask={mascaraDePreco}
                                placeholder="R$ "
                                value={preco}
                                disabled={desabled || negociavel}
                                onChange={e=>setPreco(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço Negociável</div>
                        <div className="area--input">
                            <input 
                                type="checkbox" 
                                disabled={desabled} 
                                checked={negociavel}
                                onChange={()=>setNegociavel(!negociavel)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                            <textarea
                                disabled={desabled}
                                value={descricao}
                                rows="6"
                                onChange={e=>setDescricao(e.target.value)}
                            ></textarea>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Imagens (1 ou mais)</div>
                        <div className="area--input">
                            <input
                                type="file"
                                disabled={desabled}
                                ref={fileField}
                                multiple
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={desabled}>Postar meu anúncio</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;