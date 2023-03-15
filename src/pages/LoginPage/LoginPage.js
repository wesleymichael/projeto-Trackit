import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png'


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <DadosUsuario>
            <Link to="/"><img src={logo} alt="logo-trackIt"/></Link>
            <form>
                <input 
                    type="email" 
                    placeholder="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />

                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button>Entrar</button>
            </form>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
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