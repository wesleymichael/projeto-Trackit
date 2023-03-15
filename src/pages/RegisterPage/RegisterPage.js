import React, { useState } from 'react'
import styled from 'styled-components';
import logo from '../../assets/logo.png'

export default function RegisterPage() {

    return (
        <DadosUsuario>
            <img src={logo} alt="logo-trackIt"/>
            <form>
                <input 
                    type="email" 
                    placeholder="email" 
                    //value={email}
                    //onChange={e => setEmail(e.target.value)} 
                />

                <input
                    type="password"
                    placeholder="senha"
                    //value={password}
                    //onChange={e => setPassword(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="nome"
                    //value={name}
                    //onChange={e => setName(e.target.value)}
                />

                <input
                    type="url"
                    placeholder="foto"
                    //value={password}
                    //onChange={e => setPassword(e.target.value)}
                />

                <button>Cadastrar</button>
            </form>
            <a>Já tem uma conta? Faça login!</a>
        </DadosUsuario>
    )
}

const DadosUsuario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 70px 36px;
    font-family: 'Lexend Deca';

    img{
        width: 180px;
        height: 180px;
        margin-bottom: 35px ;
    }

    form{
        display: flex;
        flex-direction: column;
    }
    a{
        margin-top: 25px;
        font-weight: 400;
        font-size: 14px;
        text-decoration-line: underline;
        color: #52B6FF; //Tema cor clara
    }
`