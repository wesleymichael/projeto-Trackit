import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import Loading from '../../components/Loading'
import { BASE_URL } from '../../constants/url'
import { DadosUsuario } from '../../style/StyledPages'

export default function RegisterPage() {
    const [form, setForm] = useState({email:"", password:"", name:"", image:""});
    const [disableForm, setDisableForm] = useState(false);
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function register(e){
        e.preventDefault();
        const body = {...form}
        setDisableForm(true);
        axios.post(`${BASE_URL}/auth/sign-up`, body)
            .then(() => {
                navigate("/");
            })
            .catch(err => {
                alert(err.response.data.message);
                setDisableForm(false);
            })
    }

    return (
        <DadosUsuario>
            <Link to="/"><img src={logo} alt="logo-trackIt"/></Link>
            <form onSubmit={register}>
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
                <input
                    id="name"
                    type="text" 
                    placeholder="nome"
                    name="name" 
                    value={form.name}
                    onChange={handleForm} 
                    required
                    disabled={disableForm}
                    data-test="user-name-input"
                />
                <input
                    id="image"
                    type="url" 
                    placeholder="foto"
                    name="image" 
                    value={form.url}
                    onChange={handleForm} 
                    required
                    disabled={disableForm}
                    data-test="user-image-input"
                />
                <button type='submit' disabled={disableForm} data-test="signup-btn">
                    {(disableForm) ? <Loading/> : "Cadastrar"}
                </button>
            </form>
            <Link to="/" data-test="login-link">Já tem uma conta? Faça login!</Link>
        </DadosUsuario>
    )
}