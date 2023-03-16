import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../context/GlobalContext'

export default function Header() {
    const {user, setUser} = useContext(GlobalContext);

    useEffect(() => {
        const user_Storage = JSON.parse(localStorage.getItem('user'));
        setUser(user_Storage);
    },[]);
 
    return (
        <HeaderStyled data-test="header">
            <div>TrackIt</div>
            <img src={user.image} alt="user-image"/>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    z-index: 2;
    background: #126BA5; //Cor tema mais escuro
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div{
        font-family: 'Playball';
        font-weight: 400;
        font-size: 38px;
        color: #FFFFFF;
    }
    img{
        width: 50px;
        height: 50px;
        border-radius: 50px;
        object-fit: cover;
    }
`