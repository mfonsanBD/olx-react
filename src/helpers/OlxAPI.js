import Cookies from 'js-cookie';
import qs from 'qs';

const BASEAPI = "http://alunos.b7web.com.br:501";

const requisicaoFile = async (endpoint, body) => {
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.append("token", token);
        }
    }
    const resposta = await fetch(BASEAPI + endpoint, {
        method: 'POST',
        body
    });

    const json = await resposta.json();

    if(json.notallowed){
        window.location.href = "/signin";
        return;
    }

    return json;
}

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

const requisicaoPut = async (endpoint, body) => {
    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }
    const resposta = await fetch(BASEAPI + endpoint, {
        method: 'PUT',
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
    login : async (email, password) => {
        const json = await requisicaoPost('/user/signin', {email, password});
        return json;
    },

    cadastro : async (name, state, email, password) => {
        const json = await requisicaoPost('/user/signup', {name, email, password, state});
        return json;
    },

    getDados : async () => {
        const json = await requisicaoGet('/user/me');
        return json;
    },

    getStates:async () => {
        const json = await requisicaoGet('/states');
        return json.states;
    },

    getCategorias:async () => {
        const json = await requisicaoGet('/categories');
        return json.categories;
    },

    getAds:async (options) => {
        const json = await requisicaoGet('/ad/list', options);
        return json;
    },

    getAllAds:async (options) => {
        const json = await requisicaoGet('/ad/list', options);
        return json;
    },

    getAd:async (id, other = false) => {
        const json = await requisicaoGet('/ad/item', {id, other});
        return json;
    },

    postAd:async (fData) => {
        const json = await requisicaoFile('/ad/add', fData);
        return json;
    },

    alteraUser:async (name, state, email) => {
        const json = await requisicaoPut('/user/me', {name, email, state});
        return json;
    }
};
// eslint-disable-next-line
export default () => OlxAPI;