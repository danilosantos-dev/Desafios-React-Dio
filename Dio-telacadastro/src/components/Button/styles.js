import styled, {css}  from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    border:none;
    margin-right:10px;
    color: #FFFFFF;
    padding: 5px 12px;
    min-width: 120px;
    width: 100%;
    font-family: 'Arial';
    font-weight: 500;
    font-size:15px;
    :hover{
        background: #FA1356;
        cursor:pointer;
    }
    
    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        
        background: #E4105D;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`