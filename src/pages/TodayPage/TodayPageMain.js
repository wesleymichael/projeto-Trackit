import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa';
import { BASE_URL } from '../../constants/url';
import { GlobalContext } from '../../context/GlobalContext';
import dayjs from 'dayjs';
import axios from 'axios';
import { Check, Texto, TodayMainStyled, TodayTask } from './Styled';

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
        if(total !== 0){
            for(const i in habits){
                if(habits[i].done === true){
                    feitos += 1;
                }
            }
            setProgress((100*feitos/total).toFixed(1))
        } else {
            setProgress(0)
        }
    }

    function weekdayToday(day) {
        const weekdaysArray = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        return weekdaysArray[day];
    }

    function toggleCheck(id, done){
        const link = (done) ? 'uncheck' : 'check';
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        }

        axios.post(`${BASE_URL}/habits/${id}/${link}`, {}, config)
            .then(() => getHabits())
            .catch(err => console.log(err.response.data))
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
                <TodayTask key={h.id} data-test="today-habit-container">
                    <div>
                        <h2 data-test="today-habit-name">{h.name}</h2>
                        <div>
                            <p data-test="today-habit-sequence">Sequência atual: <Texto isGreen={h.done} >{h.currentSequence} dia(s)</Texto></p>
                            <p data-test="today-habit-record">
                                Seu recorde: <Texto isGreen={h.currentSequence === h.highestSequence && h.highestSequence !== 0 && h.done} >{h.highestSequence} dia(s)</Texto>
                            </p>
                        </div>
                    </div>
                    <Check done={h.done} onClick={() => toggleCheck(h.id, h.done)} data-test="today-habit-check-btn"><FaCheck /></Check>
                </TodayTask>
            ))}
        </TodayMainStyled>
    )
}