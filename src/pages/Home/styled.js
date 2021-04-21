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

export const SearchArea = styled.div`
    background-color:#6e0ad6;
    padding:30px;

    form{
        display:flex;

        input{
            flex:1;
            font-size:14px;
            padding:20px;
            border:1px solid #DDD;
            border-radius:8px 0px 0px 8px;
            outline:0;
            transition:all ease .4s;
    
            &:focus{
                border:1px solid #666;
            }
    
            ::-webkit-input-placeholder { 
                color: #888;
                font-size:18px;
            }
              
            :-ms-input-placeholder { 
                color: #888;
                font-size:18px;
            }
              
            ::placeholder {
                color: #888;
                font-size:18px;
            }
        }
        button{
            background-color:#FFF;
            border:none;
            padding-left:20px;
            padding-right:20px;
            cursor:pointer;
            border-radius:0px 8px 8px 0px;
            font-size:15px;
            transition:all ease .4s;
    
            &:hover{
                color:#FFF;
                background-color:#861ba9;
            }
        }
    }
    .categoryList{
        display:flex;
        flex-wrap:wrap;
        margin-top:30px;

        .categoryItem{
            width:25%;
            display:flex;
            flex-direction:column;
            align-items:center;
            color:#FFF;
            height:50px;
            margin-bottom:10px;
            text-align:center;

            img{
                width:45px;
                height:45px;
            }
        }
    }
`;