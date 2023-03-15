import React from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa';

export default function TodayPageMain() {
  return (
    <TodayMainStyled>
        <h1>Segunda, 17/05</h1>
        <p>Nenhum hábito concluído ainda</p>
        <Task/>
        <Task/>
    </TodayMainStyled>
  )
}

function Task(){
    return(
        <TodayTask>
            <div>
                <h2>Ler capitulo 1 do livro</h2>
                <div>
                    <p>Sequencia atual: 3 dias</p>
                    <p>Se recorde: 5 dias</p>
                </div>
            </div>
            <Check><FaCheck/></Check>
        </TodayTask>
    )
}


const TodayTask = styled.div`
    //position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-bottom: 10px;
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

const Check = styled.button`
    background: #8FC549;
    border-radius: 5px;
    width: 70px;
    height: 70px;
    /* position: absolute;
    right: 10px;
    bottom: 12px; */
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const TodayMainStyled = styled.div`
    font-family: 'Lexend Deca';
    font-weight: 400;
    position: relative;
    top: 70px;
    height: calc(100vh - 70px);
    background: #F2F2F2;
    padding: 20px 17px;
    h1{
        font-size: 22px;
        color: #126BA5;
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
        color: #666666;
    }
`