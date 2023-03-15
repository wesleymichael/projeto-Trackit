import React from 'react'
import styled from 'styled-components'
import AddRoutine from './AddRoutine'

export default function RoutineMain() {
  return (
    <Div>
        <div>
            <h1>Meus hábitos</h1>
            <button>+</button>
        </div>
        <AddRoutine />
        <div>
            <p>
                Você não tem nenhum hábito cadastrado ainda. 
                Adicione um hábito para começar a trackear!
            </p>
        </div>
    </Div>
  )
}

const Div = styled.div`
    font-family: 'Lexend Deca';
    font-weight: 400;
    position: relative;
    top: 70px;
    height: calc(100vh - 70px);
    background: #F2F2F2;
    padding: 0px 17px;
    div:first-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 25px;
        button{
            width: 40px;
            height: 35px;
            font-size: 27px;
        }
    }
    h1{
        font-size: 22px;
        color: #126BA5;
    }
    p{
        font-size: 19px;
        color: #666666;
    }
`