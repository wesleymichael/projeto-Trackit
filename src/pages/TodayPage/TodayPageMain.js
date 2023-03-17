import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa';
import { BASE_URL } from '../../constants/url';
import { GlobalContext } from '../../context/GlobalContext';
import dayjs from 'dayjs';
import axios from 'axios';

export default function TodayPageMain() {
    const [date, setDate] = useState("")
    const [weekday, setWeekday] = useState("")
    const [habitsToday, setHabitsToday] = useState([])
    const {user, progress, setProgress} = useContext(GlobalContext)

    useEffect(() => {
        setDate(dayjs().locale("pt-br").format('DD/MM'));
        setWeekday(weekdayToday(dayjs().day()));
        getHabits();
    }, [user])

    function getHabits(){
        const config = {
            headers: { Authorization: `Bearer ${user.token}`}
        }
        axios.get(`${BASE_URL}/habits/today`, config)
            .then( res => {
                setHabitsToday(res.data)
                updateProgress(res.data);
            })
            .catch( err => {
                console.log(err.response.data.message)
            })
    }

    function updateProgress(habits){
        const total = habits.length;
        let feitos = 0;
        for(let i in habits){
            if(habits[i].done === true){
                feitos += 1;
            }
        }
        setProgress((100*feitos/total).toFixed(1))
    }

    function weekdayToday(day) {
        const weekdaysArray = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        return weekdaysArray[day];
    }

    function toggleCheck(id, done){
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        }
        if(done){
            axios.post(`${BASE_URL}/habits/${id}/uncheck`, {}, config)
                .then(res => getHabits())
                .catch(err => console.log(err.response.data.message))
        } else {
            axios.post(`${BASE_URL}/habits/${id}/check`, {}, config)
                .then(res => getHabits())
                .catch(err => console.log(err.response.data.message))
        }
    }

    return (
        <TodayMainStyled>
            <h1 data-test="today">{weekday}, {date}</h1>
            {(Number(progress) === 0) ? 
                <p data-test="today-counter">Nenhum hábito concluído ainda</p> 
                : 
                <p data-test="today-counter"><Texto isGreen={true}>{progress}% dos hábitos concluído</Texto></p> 
            }
            
            { habitsToday.map( h => (
                //<Task key={h.id} id={h.id} name={h.name} done={h.done} currentSequence={h.currentSequence} highestSequence={h.highestSequence} />
                <TodayTask data-test="today-habit-container">
                    <div>
                        <h2 data-test="today-habit-name">{h.name}</h2>
                        <div>
                            <p data-test="today-habit-sequence">Sequência atual: <Texto isGreen={h.done} >{h.currentSequence} dia(s)</Texto></p>
                            <p data-test="today-habit-record">
                                Seu recorde: <Texto isGreen={h.currentSequence === h.highestSequence && h.highestSequence !== 0} >{h.highestSequence} dia(s)</Texto>
                            </p>
                        </div>
                    </div>
                    <Check done={h.done} onClick={() => toggleCheck(h.id, h.done)} data-test="today-habit-check-btn"><FaCheck /></Check>
                </TodayTask>
            ))}
        </TodayMainStyled>
    )
}

// function Task({id, name, done, currentSequence, highestSequence}) {
//     return (
//         <TodayTask>
//             <div>
//                 <h2>{name}</h2>
//                 <div>
//                     <p>Sequência atual: {currentSequence} dia(s)</p>
//                     <p>Seu recorde: {highestSequence} dia(s)</p>
//                 </div>
//             </div>
//             <Check done={done} onClick={() => toggleCheck(id)}><FaCheck /></Check>
//         </TodayTask>
//     )
// }

const TodayTask = styled.div`
    //position: relative;
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

const Texto = styled.span`
    color: ${props => props.isGreen && '#8FC549'};
`

const Check = styled.button`
    background: ${props => props.done ? "#8FC549" : "#EBEBEB"};
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