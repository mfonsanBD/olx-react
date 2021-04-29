import styled from 'styled-components';

export const Item = styled.div`
    width:25%;
    margin:0 5px 15px;
    border-radius:10px;

    .itemImage img{
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

    @media(max-width:600px){
        &{
            width:100%;
        }
    }
`;