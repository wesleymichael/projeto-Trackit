import React from 'react'
import styled from 'styled-components'

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from 'react-router-dom';

export default function Footer() {
    const percentage = 66;
    return (
        <FooterStyled data-test="menu">
            <Link to="/habitos" data-test="habit-link">Hábitos</Link>
            <Link to="/hoje" data-test="today-link">
                <ProgressBar percentage={percentage} />
            </Link>
            <Link to="/historico" data-test="history-link">Histórico</Link>
        </FooterStyled>
    )
}

function ProgressBar({percentage}){
    return(
        <DivProgressBar>
            <CircularProgressbar
                value={percentage}
                text="Hoje"
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                })}
            />
        </DivProgressBar>
    )
}

const DivProgressBar = styled.div`
    width: 91px;
    height: 91px;
    position: relative;
    bottom: 20px;
`

const FooterStyled = styled.footer`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0px;
    z-index: 2;
    background: #FFFFFF;
    padding: 0 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: #52B6FF; //Cor tema claro
    }
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 22px;
`