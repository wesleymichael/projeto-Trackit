import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png'
import Loading from '../../components/Loading';
import {BASE_URL} from "../../constants/url";
import { DadosUsuario } from '../../style/StyledPages';

import { GlobalContext } from '../../context/GlobalContext';

export default function LoginPage() {
    const [form, setForm] = useState({email:"", password:""});
    const [disableForm, setDisableForm] = useState(false);
    const {setUser} = useContext(GlobalContext);
    const navigate = useNavigate();

    function handleForm(e){
        setForm( {...form, [e.target.name]: e.target.value} )
    }

    useEffect(() => {
        const user_Storage = JSON.parse(localStorage.getItem('user'));
        if(user_Storage){
            setUser(user_Storage);
            navigate('/hoje');
        }
    },[]);

    function login(e){
        e.preventDefault();
        setDisableForm(true);

        axios.post(`${BASE_URL}/auth/login`, {...form})
            .then(res => {
                setUser(res.data);
                navigate("/hoje");
                localStorage.setItem('user', JSON.stringify(res.data));
            })
            .catch(err => {
                alert(err.response.data.message);
                setDisableForm(false);
            })
    }

    return (
        <DadosUsuario>
            <Link to="/"><img src={logo} alt="logo-trackIt"/></Link>
            <form onSubmit={login}>
                <input
                    id="email"
                    type="email" 
                    placeholder="email"
                    name="email" 
                    value={form.email}
                    onChange={handleForm} 
                    required
                    disabled={disableForm}
                    data-test="email-input"
                />
                <input
                    id="password"
                    type="password" 
                    placeholder="senha"
                    name="password" 
                    value={form.password}
                    onChange={handleForm} 
                    required
                    disabled={disableForm}
                    data-test="password-input"
                />
                <button type='submit' disabled={disableForm} data-test="login-btn">
                    {(disableForm) ? <Loading/> : "Entrar"}
                </button>
            </form>
            <Link to="/cadastro" data-test="signup-link">Não tem uma conta? Cadastre-se!</Link>
        </DadosUsuario>
    )
}