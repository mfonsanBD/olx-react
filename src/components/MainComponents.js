import styled from 'styled-components';

export const Template = styled.div``;

export const PageContainer = styled.div`
    max-width:1000px;
    margin:auto;
`;

export const PageBody = styled.div``;

export const PageTitle = styled.h1`
    font-size:27px;
    color:#313131;
    text-align:center;
`;

export const MensagemDeErro = styled.div`
    width:60%;
    background-color: #f8d7da;
    color:#721c24;
    margin:10px auto;
    padding:10px;
    border-radius:5px;
`;

export const Breadcrumb = styled.div`
    margin-top:20px;
    font-size:12px;
    color:#888;

    a{
        color:#888;

        &:hover{
            color:#7d00ff;
        }
    }
`;