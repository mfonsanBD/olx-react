import React, {useState, useEffect} from 'react';
import useAPI from '../../helpers/OlxAPI';
import {PageArea, Breadcrumb} from './styled';
import {PageContainer} from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';
import { Link, useLocation, useHistory } from 'react-router-dom';

let timer;

const Page = () => {
    const api       = useAPI();
    const history   = useHistory();

    const useQueryString = () => {
        return new  URLSearchParams (useLocation().search);
    }

    const query = useQueryString();

    let qsearch                 = query.get('q');
    let qcat                    = query.get('cat');
    let qestado                 = query.get('state');

    const [q, setQ]             = useState(qsearch != null ? qsearch : '');
    const [cat, setCat]         = useState(qcat != null ? qcat : '');
    const [estado, setEstado]   = useState(qestado != null ? qestado : '');
    const [paginaAtual, setPaginaAtual] = useState(1);

    const [categorias, setCategorias]   = useState([]);
    const [estados, setEstados]         = useState([]);
    const [adList, setAdList]           = useState([]);

    const [opacidade, setOpacidade]     = useState(1);
    const [carregando, setCarregando]   = useState(true);

    const [totalItems, setTotalItems]   = useState(0);
    const [paginas, setPaginas]         = useState(0);

    const getItemsFilter = async () => {
        setCarregando(true);
        let offset = (paginaAtual-1)*9;
        const json = await api.getAds({
            sort: 'desc',
            limit: 9,
            q,
            cat,
            state:estado,
            offset
        });
        setAdList(json.ads);
        setTotalItems(json.total);
        setOpacidade(1);
        setCarregando(false);
    }

    useEffect(()=>{
        let qs = [];

        if(q){
            qs.push(`q=${q}`);
        }
        if(cat){
            qs.push(`cat=${cat}`);
        }
        if(estado){
            qs.push(`estado=${estado}`);
        }

        history.replace({
            search:`?${qs.join('&')}`
        });

        if(timer){
            clearTimeout(timer);
        }

        timer = setTimeout(getItemsFilter, 1000);
        setOpacidade(0.3);
        setPaginaAtual(1);
        // eslint-disable-next-line
    }, [q, cat, estado]);

    useEffect(()=>{
        setOpacidade(0.3);
        getItemsFilter();
        // eslint-disable-next-line
    }, [paginaAtual]);

    useEffect(()=>{
        setPaginas(Math.ceil(totalItems/adList.length));
        // eslint-disable-next-line
    }, [totalItems]);

    useEffect(()=>{
        const getCategorias = async () => {
            const listaCategorias = await api.getCategorias();
            setCategorias(listaCategorias);
        }
        getCategorias();
        // eslint-disable-next-line
    },[]);

    useEffect(()=>{
        const getEstados = async () => {
            const listaEstados = await api.getStates();
            setEstados(listaEstados);
        }
        getEstados();
        // eslint-disable-next-line
    },[]);

    let pag = [];
    for(let i = 1; i <= paginas; i++){
        pag.push(i);
    }

    document.title = "Anúncios - Clone OLX";

    return(
        <PageContainer>
            {categorias &&
                <Breadcrumb>
                    Você está em:&ensp;
                    <Link to="/">Página Inicial</Link>
                    &ensp;&gt;&ensp;
                    Anúncios
                </Breadcrumb>
            }
            <PageArea>
                <div className="leftSide">
                    <form method="GET">
                        <div className="formFilter">
                            <input 
                                type="text" 
                                name="q" 
                                placeholder="Buscar por..."
                                value={q}
                                onChange={e=>setQ(e.target.value)}
                            />
                            <button>Buscar</button>
                        </div>
                        <div className="boxFilter">
                            <p>Buscar por Estado</p>
                            <select 
                                name="state" 
                                value={estado}
                                onChange={e=>setEstado(e.target.value)}>
                                <option></option>
                                {estados.map((i, k)=>
                                    <option key={k} value={i.name}>{i.name}</option>
                                )}
                            </select>
                        </div>
                    </form>
                    <div className="boxFilter">
                        <p>Buscar pela Categoria</p>
                        <ul>
                            {categorias.map((i, k)=>
                                <li 
                                    key={k} 
                                    className={cat===i.slug ? "listaCategorias ativo" : "listaCategorias"}
                                    onClick={()=>setCat(i.slug)}
                                >
                                    <img src={i.img} alt={i.name} width="30"/>
                                    <span>{i.name}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="rightSide">
                    
                    {carregando && adList.length === 0 &&
                        <div className="avisos">Carregando...</div>
                    }
                    {!carregando && adList.length === 0 &&
                        <div className="avisos">Nenhum resultado encontrado!</div>
                    }
                    
                    <div className="list" style={{opacity:opacidade}}>
                        {adList.map((i, k)=>
                            <AdItem key={k} data={i}/>
                        )}
                    </div>

                    <div className="paginacao">
                        {pag.map((i, k)=>
                            <div 
                                onClick={()=>setPaginaAtual(i)}
                                className={i===paginaAtual?"numPaginacao ativo":"numPaginacao"}
                            >
                                {i}
                            </div>
                        )}
                    </div>
                </div>
            </PageArea>
        </PageContainer>
    );
}

export default Page;