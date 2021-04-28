import styled from 'styled-components';

export const PageArea = styled.div`
    display:flex;
    margin-top:50px;

    .leftSide{
        width:250px;
        margin-right:20px;

        .formFilter{
            display:flex;
    
            input{
                width:100%;
                font-size:14px;
                padding:10px;
                border:1px solid #DDD;
                border-radius:8px 0px 0px 8px;
                outline:0;
                transition:all ease .4s;
        
                &:focus{
                    border:1px solid #666;
                }
        
                ::-webkit-input-placeholder { 
                    color: #888;
                    font-size:15px;
                }
                  
                :-ms-input-placeholder { 
                    color: #888;
                    font-size:15px;
                }
                  
                ::placeholder {
                    color: #888;
                    font-size:15px;
                }
            }
            button{
                background-color:#6e0ad6;
                color:#FFF;
                border:none;
                padding-left:10px;
                padding-right:10px;
                cursor:pointer;
                border-radius:0px 8px 8px 0px;
                font-size:15px;
                transition:all ease .4s;
        
                &:hover{
                    color:#333;
                    background-color:#FFF;
                }
            }
        }
            
        select{
            width:95%;
            font-size:14px;
            padding:10px;
            margin:6px;
            border:1px solid #DDD;
            border-radius:8px;
            outline:0;
            cursor:pointer;
            transition:all ease .4s;
    
            &:focus{
                border:1px solid #666;
            }
    
            ::-webkit-input-placeholder { 
                color: #888;
                font-size:15px;
            }
              
            :-ms-input-placeholder { 
                color: #888;
                font-size:15px;
            }
              
            ::placeholder {
                color: #888;
                font-size:15px;
            }
        }

        .boxFilter{
            margin-top:20px;
            background-color:#FFF;
            border:1px solid #DDD;
            border-radius:8px;

            p{
                margin:0;
                padding:10px;
                text-align:center;
                background-color:#6e0ad6;
                color:#FFF;
                border-radius:8px 8px 0 0;
            }
            ul{
                padding:0 20px;
            }
            li{
                margin:20px 0;
            }
            .listaCategorias{
                display:flex;
                align-items:center;
                cursor:pointer;
                padding:10px;

                img{
                    margin-right:10px;
                }
                span{
                    flex:1;
                }
            }
            .listaCategorias:hover,
            .listaCategorias.ativo{
                background-color:#DDD;
                border-radius:10px;
            }
        }
    }
    .rightSide{
        flex:1;

        .avisos{
            padding:20px;
            text-align:center;
            color: #856404;
            background-color: #fff3cd;
            border-radius:10px;
            margin-bottom:10px;
        }
        
        .list{
            display:flex;
            flex-wrap:wrap;
    
            .aditem{
                width:33%;
            }
        }

        .paginacao{
            display:flex;
            align-items:center;
            justify-content:center;
            flex-wrap:wrap;
            margin-top:20px;

            .numPaginacao{
                width:30px;
                height:30px;
                display:flex;
                align-items:center;
                justify-content:center;
                padding:5px;
                border:1px solid #666666;
                color:#666666;
                margin:5px;
                cursor:pointer;
                transition:all ease .4s;

                &:hover{
                    background-color:#6e0ad6;
                    border:1px solid #FFFFFF;
                    color:#FFFFFF;
                }
            }
        }
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