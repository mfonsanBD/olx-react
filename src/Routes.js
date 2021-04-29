import React from 'react';
import {Switch} from 'react-router-dom';
import RouteHendler from './components/RouteHendler';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AdItems from './pages/AdItems';
import PostAd from './pages/PostAd';
import MyAccount from './pages/MyAccount';

const Rotas = () => {
    return(
        <Switch>
            <RouteHendler exact path="/">
                <Home/>
            </RouteHendler>
            
            <RouteHendler exact path="/sobre">
                <About/>
            </RouteHendler>
            
            <RouteHendler exact path="/signin">
                <SignIn/>
            </RouteHendler>
            
            <RouteHendler exact path="/signup">
                <SignUp/>
            </RouteHendler>
            
            <RouteHendler exact path="/ad/:id">
                <AdPage/>
            </RouteHendler>
            
            <RouteHendler exact path="/ads">
                <AdItems/>
            </RouteHendler>
            
            <RouteHendler private exact path="/post-ad">
                <PostAd/>
            </RouteHendler>
            
            <RouteHendler private exact path="/my-account">
                <MyAccount/>
            </RouteHendler>
            
            <RouteHendler>
                <NotFound/>
            </RouteHendler>
        </Switch>
    );
}

export default Rotas;