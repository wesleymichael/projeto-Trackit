import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { BACKGROUND_GREY, TEMA_ESCURO, TEXT_GREY } from '../../constants/colors'

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
    position: relative;
    top: 70px;
    height: calc(100vh - 70px);
    background: ${BACKGROUND_GREY};
    padding: 20px 17px;
    h1{
        font-size: 22px;
        color: ${TEMA_ESCURO};
        padding-bottom: 17px;
    }
    p{
        font-size: 18px;
        color: ${TEXT_GREY};
    }
`