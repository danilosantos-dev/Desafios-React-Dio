import styled from 'styled-components';

export const Container = styled.main`
    display:flex;
    height:100vh;
    margin-left:300px;
    margin-top:100px; 
    max-width:1300px;
    width:100%;
    
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`



export const Title = styled.h2`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width:300px;
    max-width: 90%;
    line-height: 38px;
    color: #FFFFFF;
`

export const TitleLogin = styled.p`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 44px;
    margin-bottom:15px;
`

export const SubtitleLogin = styled.p`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 35px;
`


export const TenhoConta  = styled.p`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    margin-top:50px;
` 
export const FazerLogin  = styled.a`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    color: #6FF558;
    :hover{
        cursor:pointer;
        border-bottom:1px solid #6FF558 ;
    }
`


export const CriarText =  styled.p`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
    margin-top:20px;
   
`
export const AceitarTermos = styled.a`
    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    color:#9E65F5;
    :hover{
        cursor:pointer;
        border-bottom:1px solid #9E65F5 ;
    }
`
