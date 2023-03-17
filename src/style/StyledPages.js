import styled from "styled-components";
import { TEMA_CLARO } from "../constants/colors";

export const DadosUsuario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 70px 36px;
    font-family: 'Lexend Deca';
    button{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        width: 180px;
        height: 180px;
        margin-bottom: 30px;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    a{
        margin-top: 25px;
        font-size: 14px;
        text-decoration-line: underline;
        color: ${TEMA_CLARO};
    }
`