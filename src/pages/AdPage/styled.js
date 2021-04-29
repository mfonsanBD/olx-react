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
        padding:20px;
        border-radius:8px;
        border-top:8px solid #333;
    }

    .leftSide{
        flex:1;
        margin-right:20px;

        .newBox{
            display:flex;
        }

        .adInfor{
            flex:1;
        }

        .adTitulo{
            h1{
                margin:0;
            }

            .infoDate{
                font-size:12px;
                color:#888;
            }
        }
        .adImagem{
            width:320px;
            height:320px;
            margin-right:20px;

            each-slide img{
                display:flex;
                align-items:center;
                justify-content:center;
                background-size:cover;
                width:320px;
            }
        }
        .adPreco{
            width:100%;
            margin-bottom:20px;
            color:#444;

            h2{
                margin-bottom:0;
            }
        }
        .adDescricao{
            border-bottom:1px solid #DDD;
            padding:20px 0 10px;
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
                line-height: 1;
            }
            small{
                margin:0;

                a{
                    color:#6e0ad6;
                    transition:all ease .4s;
            
                    &:hover{
                        color:#888;
                    }
                }
            }
        }
        .adAlerta{
            text-align:center;

            h3{
                margin:0;
            }

            ul{
                padding:0;
            }
            
            li{
                font-size:14px;
                margin-bottom:20px;
                font-size:14px;
                color:#888888;
            }

            a{
                color:#6e0ad6;
                transition:all ease .4s;
        
                &:hover{
                    color:#888;
                }
            }
        }
    }
`;

export const OthersArea = styled.div`
    h2{
        font-size:20px;
    }

    .list{
        display:flex;
        flex-wrap:wrap;

        .aditem{
            width:25%;
        }
    }
`;