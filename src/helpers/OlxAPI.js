import Cookies from 'js-cookie';
import qs from 'qs';

const BASEAPI = "http://alunos.b7web.com.br:501";

const requisicaoPost = async (endpoint, body) => {
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }
    const resposta = await fetch(BASEAPI + endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const json = await resposta.json();

    if(json.notallowed){
        window.location.href = "/signin";
        return;
    }

    return json;
}

const requisicaoGet = async (endpoint, body = []) => {
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }
    const resposta = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);

    const json = await resposta.json();

    if(json.notallowed){
        window.location.href = "/signin";
        return;
    }

    return json;
}

const OlxAPI = {
    login : async (email, senha) => {
        const json = await requisicaoPost(
            '/user/signin',
            {email, senha}
        );
        return json;
    }
};

export default () => OlxAPI;