import React, {useState, useEffect} from 'react';
import useAPI from '../../helpers/OlxAPI';
import {PageArea, Breadcrumb} from './styled';
import {PageContainer} from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';
import { Link } from 'react-router-dom';

const Page = () => {
    const api = useAPI();
    const [adList, setAdList] = useState([]);

    useEffect(()=>{
        const getAll = async () =>{
            const json = await api.getAllAds({
                sort: 'desc',
                limit: 500
            });
            setAdList(json.ads);
        }
        getAll();
        // eslint-disable-next-line
    }, []);

    document.title = "Anúncios - Clone OLX";

    return(
        <>
            <PageContainer>
                <Breadcrumb>
                    Você está em: <Link to="/">Página Inicial</Link> &gt; Anúncios
                </Breadcrumb>
                <PageArea>
                    <div className="list">
                        {adList.map((i, k)=>
                            <AdItem key={k} data={i}/>
                        )}
                    </div>
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;