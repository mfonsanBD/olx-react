import styled from 'styled-components';

export const Fake = styled.div`
    background-color: #CCC;
    height:${props => props.height || 20}px;
`;

export const FakeR = styled.div`
    background-color: #FFF;
    height:20px;
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

export const PageArea = styled.div`
    margin-top:20px;
    display:flex;

    .box{
        background-color:#FFF;
        border:1px solid #D8D8D8;
        margin-bottom:10px;
        padding:10px;
        border-radius:8px;
        border-top:8px solid #333;
    }

    .leftSide{
        flex:1;
        margin-right:20px;

        .adTitulo{
            margin-bottom:20px;

            h1{
                margin:0;
            }

            .infoDate{
                font-size:12px;
                color:#888;
            }
        }
        .adImagem{
            margin-bottom:10px;

            img{
                width:100%;
            }
        }
        .adPreco{
            width:30%;
            margin-bottom:20px;
            color:#444;

            h2{
                margin-bottom:0;
            }
        }
        .adDescricao{
            border-top:1px solid #DDD;
            border-bottom:1px solid #DDD;
            padding:20px 0;
            margin-bottom:10px;
        }
    }
    .rightSide{
        width:250px;

        .adPrecoR{
            background-color:#6e0ad6;
            padding:20px 20px 20px 40px;
            margin-bottom:10px;
            color:#FFF;
            font-weight:bold;
            border-radius:50px 10px 10px 50px;

            h2{
                margin:0;
            }
        }
        .adUser{
            text-align:center;

            h2{
                margin:0;
            }
            p{
                margin:0;
            }
        }
    }
`;