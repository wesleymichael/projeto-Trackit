import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    button{
        height: 45px;
        border: none;
        background: #52B6FF; //Tema cor clara
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        text-align: center;
        color: #FFFFFF;
    }

	input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
		padding: 0 10px;
		font-size: 18px;
		display: flex;
		align-items: center;
        color: #666666;
		&::placeholder{
			font-family: 'Lexend Deca';
            font-weight: 400;
            font-size: 20px;
            color: #DBDBDB;
		}
        &:focus{
            outline: 0;
        }
	}
`

export default GlobalStyle