import styled from 'styled-components';

export const PageArea = styled.div`
    width:60%;
    margin:auto;

    form{
        background-color:#FFF;
        border-radius:5px;
        padding:20px;
        box-shadow:0 0 10px #EDEDED;

        .area{
            display:flex;
            align-items:center;
            padding:10px;
            max-width:500px;
            justify-content:center;

            .area--title{
                width:200px;
                text-align:right;
                padding-right:20px;
                font-weight:bold;
                font-size:14px;
            }
            .area--input{
                flex:1;

                input, select{
                    width:100%;
                    font-size:14px;
                    padding:10px;
                    border:1px solid #DDD;
                    border-radius:5px;
                    outline:0;
                    transition:all ease .4s;

                    &:focus{
                        border:1px solid #666;
                    }
                }
                button{
                    width:100%;
                    background-color:#FF8100;
                    color:#FFF;
                    border:0;
                    outline:0;
                    border-radius:5px;
                    padding:15px;
                    cursor:pointer;
                    display:block;

                    &:hover{
                        background-color:#E57706;
                    }
                }
            }
        }
    }

    @media(max-width:600px){
        width:100%;

        form{
            padding:10px;
    
            .area{
                flex-direction:column;

                .area--title{
                    width:100%;
                    text-align:left;
                }
                .area--input{
                    width:100%;
                }
            }
    }
`;