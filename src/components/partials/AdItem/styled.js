import styled from 'styled-components';

export const Item = styled.div`
    a{
        display:block;
        margin:0 5px 15px;
        background-color:#FFF;
        border-radius:10px;
        border:1px solid #FFF;
        transition:all ease .4s;

        img{
            width:100%;
            border-radius:10px 10px 0 0;
        }

        .itemTitle{
            padding:0 15px;
            color:#4a4a4a;
            font-size:14px;
        }

        .itemPrice{
            padding:0 15px 10px;
            color:#4a4a4a;
            font-weight:bold;
        }

        &:hover{
            border:1px solid #6e0ad6;
        }
    }
`;