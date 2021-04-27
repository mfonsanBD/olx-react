import styled from 'styled-components';

export const PageArea = styled.div`
    .list{
        display:flex;
        flex-wrap:wrap;

        .aditem{
            width:25%;
        }
    }
    .quadroLink{
        text-align:right;
        margin-top:30px;
    }
    .seeAllList{
        color:#4a4a4a;
        font-size:14px;

        &:hover{
            color:#6e0ad6;
        }
    }
    hr{
        border:none;
        background-color:#DDD;
        width:100%;
        height:1px;
        margin:10px 0 30px;
    }
    .pageText{
        color:#4a4a4a;
        font-size:12px;
        margin-bottom:50px;
    }
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