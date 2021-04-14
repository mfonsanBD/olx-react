import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Page(){
    const dispatch = useDispatch();
    const email = useSelector(state=>state.user.email);
    return(
        <>
            <h1>Olá, Mundo!</h1>
            <p>E-mail: {email}</p>
        </>
    );
}

export default Page;