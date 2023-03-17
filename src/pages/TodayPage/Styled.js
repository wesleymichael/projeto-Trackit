import styled from "styled-components";
import {BACKGROUND_GREY, CHECK, TEMA_ESCURO, TEXT_GREY, UNCHECK} from '../../constants/colors'

export const TodayTask = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin: 10px 0;
    h2{
        font-size: 20px;
        padding-bottom: 7px;
    }
    >div{
        p{
            font-size: 12px;
            line-height: 15px;
        }   
    }
`
export const Texto = styled.span`
    color: ${props => props.isGreen && CHECK};
`
export const Check = styled.button`
    background: ${props => props.done ? CHECK : UNCHECK };
    border-radius: 5px;
    width: 70px;
    height: 70px;
    bottom: 12px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export const TodayMainStyled = styled.div`
    font-family: 'Lexend Deca';
    position: relative;
    top: 70px;
    height: 100%;
    min-height: calc(100vh - 70px);
    background: ${BACKGROUND_GREY};
    padding: 20px 17px;
    padding-bottom: 90px;
    h1{
        font-size: 22px;
        color: ${TEMA_ESCURO};
        padding-bottom: 5px;
    }
    >p{
        font-size: 18px;
        color: #BABABA;
        padding-bottom: 28px;
    }
    >div{
        background: #FFFFFF;
        border-radius: 5px;
        height: 94px;
        color: ${TEXT_GREY};
    }
`