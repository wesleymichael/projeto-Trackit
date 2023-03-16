import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import weekdays from '../../constants/weekdays'
import {BASE_URL} from '../../constants/url'
import Loading from '../../components/Loading';

import { GlobalContext } from '../../context/GlobalContext';
import axios from 'axios';

export default function AddRoutine({setShowAddRoutine, name, setName, days, setDays}) {
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
            })
            .catch(err => {
                alert(err.response.data.message);
                setDisableForm(false);
            })
    }

    return (
        <Div>
            <input
                type="text"
                placeholder="nome do habito"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={disableForm}
            />
            <div>
                {weekdays.map( w => (
                    <ButtonWeekday 
                        key={w.id} 
                        onClick={() => toggleDays(w.id)} 
                        isSelected={days.some((id) => id === w.id)}
                        disabled={disableForm}
                    >
                        {w.name}
                    </ButtonWeekday>
                ))}
            </div>
            <div>
                <a onClick={() => setShowAddRoutine(false)}>Cancelar</a>
                <button type='submit' disabled={disableForm} onClick={createRoutine}>
                    {(disableForm) ? <Loading/> : "Salvar"}
                </button>
            </div>
        </Div>
    )
}


const ButtonWeekday = styled.button`
    border-radius: 5px;
    background: ${(props) => props.isSelected ? "#DBDBDB" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    color: ${(props) => props.isSelected ? "#FFFFFF" : "#DBDBDB" };
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
    margin: 25px 0; 
    padding: 18px;
    position: relative;
    div:last-child{
        position: absolute;
        bottom: 15px;
        right: 15px;
        display: flex;
        align-items: center;
        a{
            color: #52B6FF;
            padding-right: 20px;
            cursor: pointer;
        }
        button{
            width: 84px;
            height: 35px;
            font-size: 16px;
        }
        div{
            padding: 0;
            position: relative;
            bottom: 10px;
            left: 10px;
        }
    }
`