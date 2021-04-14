import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';

function Page(){
    const dispatch = useDispatch();
    const email = useSelector(state=>state.user.email);
    return(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    );
}

export default Page;