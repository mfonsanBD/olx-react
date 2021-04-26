import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import useAPI from '../../helpers/OlxAPI';
import {PageArea, Fake, FakeR, Breadcrumb} from './styled';
import {PageContainer} from '../../components/MainComponents';

const Page = () => {
    const api = useAPI();
    const {id} = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState({});

    useEffect(()=>{
        const getIdInfo = async (id) => {
            const json = await api.getAd(id, true);
            setAdInfo(json);
            setLoading(false);
        }
        getIdInfo(id);
        // eslint-disable-next-line
    }, []);

    const formatDate = (date) => {
        let cdate = new Date(date);

        let nomeMes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

        let dia = cdate.getDay();
        let mes = cdate.getMonth();
        let ano = cdate.getFullYear();

        return ` ${dia} de ${nomeMes[mes]} de ${ano}`;
    }

    const formataPreco = (preco, negociavel) => {
        let price = '';
    
        if(negociavel){
            price = "Negociável!";
        }
        else{
            price = preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        }

        return price;
    }

    return(
        <PageContainer>
            <Breadcrumb>
                <Link to="/">Página Inicial</Link> &gt; <Link to="/ad">Anúncios</Link> &gt; Nome do Anúncio
            </Breadcrumb>
            <PageArea>
                <div className="leftSide">
                    <div className="adTitulo">
                        {loading &&
                            <Fake height="20"/>
                        }
                        {adInfo.title &&
                            <h1>{adInfo.title}</h1>
                        }
                        <div className="infoDate">
                            {loading &&
                                <Fake height="10"/>
                            }
                            {adInfo.dateCreated &&
                                <span>
                                    Criado em: 
                                    {
                                        formatDate(adInfo.dateCreated)
                                    } &#8211;
                                    por: {adInfo.userInfo.name} &#8211;
                                    estado: {adInfo.stateName}
                                </span>
                            }
                        </div>
                    </div>
                    <div className="adImagem">
                        {loading &&
                            <Fake height="300"/>
                        }
                        {adInfo.images &&
                            <img src={adInfo.images} alt={adInfo.title}/>
                        }
                    </div>
                    <div className="adPreco">
                        {loading &&
                            <Fake height="40"/>
                        }
                        {adInfo.price && 
                            <h2>{formataPreco(adInfo.price, adInfo.priceNegotiable)}</h2>
                        }
                    </div>
                    <div className="adDescricao">
                        {loading &&
                            <Fake height="200"/>
                        }
                        {adInfo.description}
                    </div>
                    <div className="adVisualizacoes">
                        {loading &&
                            <Fake height="20"/>
                        }
                        {adInfo.views &&
                            <small>Visualizações no anúncio: {adInfo.views}</small>
                        }
                    </div>
                </div>
                <div className="rightSide">
                    <div className="adPrecoR">
                            {loading &&
                                <FakeR height="50"/>
                            }
                            {adInfo.price && 
                                <h2>{formataPreco(adInfo.price, adInfo.priceNegotiable)}</h2>
                            }
                    </div>
                    <div className="box">
                        <div className="adUser">
                            {loading &&
                                <Fake height="50"/>
                            }
                            {adInfo.userInfo && 
                                <>
                                <h2>{adInfo.userInfo.name}</h2>
                                <p>{adInfo.userInfo.email}</p>
                                </>
                            }
                        </div>
                    </div>
                    <div className="box">
                        <div className="adAlerta">
                            {loading &&
                                <Fake height="20"/>
                            }
                        </div>
                    </div>
                </div>
            </PageArea>
        </PageContainer>
    );
}

export default Page;