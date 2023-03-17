import React, { useContext } from 'react';
import styled from 'styled-components';
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { TEMA_CLARO } from '../constants/colors';

export default function Footer() {
    const {progress} = useContext(GlobalContext)
    return (
        <FooterStyled data-test="menu">
            <Link to="/habitos" data-test="habit-link">Hábitos</Link>
            <Link to="/hoje" data-test="today-link">
                <ProgressBar progress={progress} />
            </Link>
            <Link to="/historico" data-test="history-link">Histórico</Link>
        </FooterStyled>
    )
}

function ProgressBar({progress}){
    return(
        <DivProgressBar>
            <CircularProgressbar
                value={progress}
                text="Hoje"
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: TEMA_CLARO,
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
    bottom: 0;
    z-index: 2;
    background: #FFFFFF;
    padding: 0 28px;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: ${TEMA_CLARO};
        font-family: 'Lexend Deca';
    }
`