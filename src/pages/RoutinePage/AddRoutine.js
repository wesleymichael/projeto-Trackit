import React from 'react'
import styled from 'styled-components'
import weekdays from '../../constants/weekdays'

export default function AddRoutine() {
    console.log(weekdays)
    return (
        <Div>
            <input
                type="text"
                placeholder="nome do habito"
            />
            <div>
                {weekdays.map( w => (
                    <ButtonWeekday>{w.name}</ButtonWeekday>
                ))}
            </div>
            <div>
                <a>Cancelar</a>
                <button>Salvar</button>
            </div>
        </Div>
    )
}

const ButtonWeekday = styled.button`
    border-radius: 5px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    color: #DBDBDB;
    font-weight: 400;
    &&&{
        width: 30px;
        height: 30px;
        font-size: 20px;
        margin-right: 4px;
    }
`

const Div = styled.div`
    width: 100%;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 30px 0; 
    padding: 18px;
    position: relative;
    div:last-child{
        position: absolute;
        bottom: 15px;
        right: 15px;
        a{
            color: #52B6FF;
            padding-right: 20px;
        }
        button{
            width: 85px;
            height: 35px;
            font-size: 16px;
        }
    }
`