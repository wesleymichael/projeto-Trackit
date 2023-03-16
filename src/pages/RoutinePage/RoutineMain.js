import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import AddRoutine from './AddRoutine'
import { BASE_URL } from '../../constants/url'

import { GlobalContext } from '../../context/GlobalContext';
import axios from 'axios';
import ShowRoutine from './ShowRoutine';

export default function RoutineMain() {
    const [showAddRoutine, setShowAddRoutine] = useState(false);
    const [name, setName] = useState("");
    const [days, setDays] = useState([]);
    const [routine, setRoutine] = useState([])
    const { user } = useContext(GlobalContext);

    useEffect(() => {
        getData();
    }, [user])

    function getData() {
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        }
        axios.get(`${BASE_URL}/habits`, config)
            .then(res => {
                setRoutine(res.data)
            })
            .catch(err => {
                console.log(err.response.data.message)
            })
    }

    return (
        <Div>
            <div>
                <h1>Meus hábitos</h1>
                <button onClick={() => setShowAddRoutine(true)} data-test="habit-create-btn">+</button>
            </div>
            {(showAddRoutine) ?
                <AddRoutine
                    setShowAddRoutine={setShowAddRoutine}
                    name={name}
                    setName={setName}
                    days={days}
                    setDays={setDays}
                    getData={getData}
                /> : ""
            }

            <div>
                {(routine.length === 0) ?
                    <p>
                        Você não tem nenhum hábito cadastrado ainda.
                        Adicione um hábito para começar a trackear!
                    </p>
                    :
                    <ShowRoutine
                        routine={routine}
                        getData={getData}
                    />
                }
            </div>
        </Div>
    )
}

const Div = styled.div`
    font-family: 'Lexend Deca';
    font-weight: 400;
    position: relative;
    top: 70px;
    height: 100%;
    min-height: calc(100vh - 70px);
    background: #F2F2F2;
    padding: 0px 17px;
    padding-bottom: 90px;
    >div:first-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 20px;
        button{
            width: 40px;
            height: 35px;
            font-size: 27px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        h1{
            font-size: 22px;
            color: #126BA5;
        }
    }
    p{
        font-size: 19px;
        color: #666666;
        padding-top: 20px;
    }
`