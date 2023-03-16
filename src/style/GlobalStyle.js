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
        color: #FFFFFF;
        /* display: flex;
		align-items: center;
        justify-content: center; */
        cursor: pointer;
    }

	input {
        font-family: 'Lexend Deca';
        color: #666666;
        font-weight: 400;
        width: calc(100vw - 70px);
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 6px;
		padding: 0 10px;
		font-size: 18px;
		display: flex;
		align-items: center;
		&::placeholder{
            font-size: 20px;
            color: #DBDBDB;
		}
        &:focus{
            outline: 0;
        }
        &:disabled{
            background: #F2F2F2;
            color: #AFAFAF;
            font-size: 20px;
        }
        &:-webkit-autofill{
            -webkit-text-fill-color: #666666;
        }
	}
`
export default GlobalStyle