import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ButtonWeekday } from './Styled'
import weekdays from '../../constants/weekdays'
import { FaRegTrashAlt } from 'react-icons/fa';
import { BASE_URL } from '../../constants/url'
import { GlobalContext } from '../../context/GlobalContext';
import axios from 'axios';

export default function ShowRoutine({ routine, getData }) {
    const { user } = useContext(GlobalContext);
    const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false)

    function deleteRoutine(id) {
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        }
        axios.delete(`${BASE_URL}/habits/${id}`, config)
            .then(res => {
                alert("Hábito deletado");
                setConfirmDeleteVisible(false);
                getData();
            })
    }
    
    return (
        <>
            {routine.map(r => (
                <Div key={r.name} data-test="habit-container">
                    <h1 data-test="habit-name">{r.name}</h1>
                    <Weekdays weekdays={weekdays} days={r.days} />
                    <Delete onClick={() => setConfirmDeleteVisible(true)} data-test="habit-delete-btn"><FaRegTrashAlt /></Delete>

                    {(confirmDeleteVisible) &&
                        <ConfirmDeleteStyled>
                            <div>
                                <p>Deletar item?</p>
                                <div>
                                    <button onClick={() => setConfirmDeleteVisible(false)}>Cancelar</button>
                                    <button onClick={() => deleteRoutine(r.id)}>Deletar</button>
                                </div>
                            </div>
                        </ConfirmDeleteStyled>
                    }
                </Div>
            ))}

        </>
    )
}
function Weekdays({ weekdays, days }) {
    return (
        <span>
            {weekdays.map(w => (
                <ButtonWeekday key={w.id} isSelected={days.includes(w.id)} data-test="habit-day">
                    {w.name}
                </ButtonWeekday>
            ))}
        </span>
    )
}
const ConfirmDeleteStyled = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 3;
    height: 100vh;
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(49, 46, 46, 0.7);
        height: 90px;
        width: 200px;
        border-radius: 10px;
        padding: 0;
    }
    p{
        padding: 10px !important;
        color: #FFFFFF !important;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid rgb(161, 161, 161);
    }
    button{
        position: relative;
        bottom: 0;
        height: 30px;
        width: 100px;
        font-size: 15px;
        padding-top: 10px;
        background: none;
    }
`
const Delete = styled.span`
    width: 15px;
    height: 13px;
    position: absolute;
    top: 10px;
    right: 10px;
`
const Div = styled.div`
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0;
    padding-left: 15px;
    position: relative;
    h1{
        color: #666666;
        font-size: 20px;
        padding-bottom: 10px;
    }
`