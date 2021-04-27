import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Slide} from 'react-slideshow-image';
import useAPI from '../../helpers/OlxAPI';
import {PageArea, Fake, FakeR, Breadcrumb, OthersArea} from './styled';
import {PageContainer} from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';

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

    document.title = adInfo.title+" - Clone OLX";

    return(
        <PageContainer>
            {adInfo.category &&
                <Breadcrumb>
                    Você está em:&ensp;
                    <Link to="/">Página Inicial</Link>
                    &ensp;&gt;&ensp;
                    <Link to="/ads">Anúncios</Link>
                    &ensp;&gt;&ensp;
                    <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>
                    &ensp;&gt;&ensp;
                    <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}>{adInfo.category.name}</Link>
                    &ensp;&gt;&ensp;
                    {adInfo.title}
                </Breadcrumb>
            }
            <PageArea>
                <div className="leftSide">
                    <div className="newBox">
                        <div className="adImagem">
                            {loading &&
                                <Fake height="300"/>
                            }
                            {adInfo.images &&
                                <Slide>
                                    {adInfo.images.map((img, k) => 
                                        <div key={k} className="each-slide">
                                            <img src={img} alt="" height="320px"/>
                                        </div>
                                    )}
                                </Slide>
                            }
                        </div>
                        <div className="adInfor">
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
                                <small>Visualizado: {adInfo.views} vezes.</small>
                            }
                        </div>
                        </div>
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
                                <small><a href={`mailto:${adInfo.userInfo.email}`}>Contate Este Vendedor</a></small>
                                </>
                            }
                        </div>
                    </div>
                    <div className="box">
                        <div className="adAlerta">
                            {loading &&
                                <Fake height="20"/>
                            }
                            {adInfo.userInfo && 
                                <div>
                                    <h3>Dicas de segurança</h3>
                                    <ul>
                                        <li>Não faça pagamentos antes de verificar se o produto existe.</li>
                                    </ul>
                                    <small><a href="https://google.com">Clique para ver todas as dicas</a></small>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </PageArea>
            <OthersArea>
                {adInfo.others &&
                    <>
                        <h2>Outros anúncios do vendedor</h2>
                        <div className="list">
                            {adInfo.others.map((i, k) =>
                                <AdItem key={k} data={i}/>
                            )}
                        </div>
                    </>
                }
            </OthersArea>
        </PageContainer>
    );
}

export default Page;