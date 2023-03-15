import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function HistoryPage() {
    return (
        <>
            <Header />
            <HistoryStyled>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </HistoryStyled>
            <Footer />
        </>
    )
}

const HistoryStyled = styled.div`
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
        padding-bottom: 17px;
    }
    p{
        font-size: 18px;
        color: #666666;
    }
`