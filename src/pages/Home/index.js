import React, {useState, useEffect} from 'react';
import useAPI from '../../helpers/OlxAPI';
import {PageArea, SearchArea} from './styled';
import {PageContainer} from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';
import { Link } from 'react-router-dom';

const Page = () => {
    const api = useAPI();

    const [categorias, setCategorias] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(()=>{
        const getCategorias = async () => {
            const listaCategorias = await api.getCategorias();
            setCategorias(listaCategorias);
        }
        getCategorias();
    },[]);

    useEffect(()=>{
        const getRecentAds = async () =>{
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, []);

    return(
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="Estou procurando por..."/>
                            <button>Buscar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categorias.map((i, k) => 
                            <Link key={k} className="categoryItem" to={`/ads?cat=${i.slug}`}>
                                <img src={i.img} alt=""/>
                                <span>{i.name}</span>
                            </Link>
                        )}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Anúncios Recentes</h2>
                    <div className="list">
                        {adList.map((i, k)=>
                            <AdItem key={k} data={i}/>
                        )}
                    </div>
                    <div className="quadroLink">
                        <Link to="/ads" className="seeAllList">Ver Todos &gt;&gt;</Link>
                    </div>

                    <hr/>
                    <p className="pageText">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;