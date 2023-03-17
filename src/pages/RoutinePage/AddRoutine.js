import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import weekdays from '../../constants/weekdays'
import {BASE_URL} from '../../constants/url'
import Loading from '../../components/Loading';
import {ButtonWeekday} from './Styled'
import { GlobalContext } from '../../context/GlobalContext';
import axios from 'axios';

export default function AddRoutine({setShowAddRoutine, name, setName, days, setDays, getData}) {
    const [disableForm, setDisableForm] = useState(false);
    const {user} = useContext(GlobalContext);

    function toggleDays(id){
        if(days.includes(id)){
            const newDays = days.filter( w => w !== id);
            setDays(newDays);
        } else {
            setDays([...days, id]);
        }
    }

    function createRoutine(){
        setDisableForm(true)
        const body = {name, days}
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        }

        axios.post(`${BASE_URL}/habits`, body, config)
            .then(res => {
                setName("");
                setDays([]);
                setShowAddRoutine(false);
                getData();
            })
            .catch(err => {
                alert(err.response.data.message);
                setDisableForm(false);
            })
    }

    return (
        <Div data-test="habit-create-container">
            <input
                type="text"
                placeholder="nome do habito"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={disableForm}
                data-test="habit-name-input"
            />
            <div>
                {weekdays.map( w => (
                    <ButtonWeekday 
                        key={w.id} 
                        onClick={() => toggleDays(w.id)} 
                        isSelected={days.some((id) => id === w.id)}
                        disabled={disableForm}
                        data-test="habit-day"
                    >
                        {w.name}
                    </ButtonWeekday>
                ))}
            </div>
            <div>
                <ButtonCancelar onClick={() => setShowAddRoutine(false)} disabled={disableForm} data-test="habit-create-cancel-btn">Cancelar</ButtonCancelar>
                <button type='submit' onClick={createRoutine} disabled={disableForm} data-test="habit-create-save-btn">
                    {(disableForm) ? <Loading/> : "Salvar"}
                </button>
            </div>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 10px 0 20px 0; 
    padding: 18px;
    position: relative;
    div:last-child{
        position: absolute;
        bottom: 15px;
        right: 15px;
        display: flex;
        align-items: center;
        button{
            width: 84px;
            height: 35px;
            font-size: 16px;
        }
        /* div{
            position: relative;
            bottom: 10px;
            left: 10px;
        } */
    }
`
const ButtonCancelar = styled.button`
    color: #52B6FF;
    margin-right: 20px;
    cursor: pointer;
    background: #FFFFFF;
`