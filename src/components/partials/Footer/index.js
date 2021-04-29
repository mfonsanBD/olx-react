import React from 'react';
import {FooterArea} from './styled';
import {PageContainer} from '../../MainComponents';

const Footer = () => {
    return(
        <PageContainer>
            <FooterArea>
                &copy; copyright - Clone OLX - Todos os direitos reservados
            </FooterArea>
        </PageContainer>
    );
}

export default Footer;