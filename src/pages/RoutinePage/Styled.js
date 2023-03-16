import styled from "styled-components"

export const ButtonWeekday = styled.button`
    border-radius: 5px;
    background: ${(props) => props.isSelected ? "#DBDBDB" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    color: ${(props) => props.isSelected ? "#FFFFFF" : "#DBDBDB" };
    font-weight: 400;
    &&&{
        width: 30px;
        height: 30px;
        font-size: 20px;
        margin-right: 4px;
    }
`