import styled  from 'styled-components';

export const Container = styled.div`
   
    width: 100%;
    max-width: 90%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`;

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 55px;
    display:flex
    justify-content: center;
    align-items: center
`

export const MenuRight = styled.a`
    font-family: 'Arial';
    font-weight: 500;
    font-style: normal;
    font-size: 15px;
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    :hover{
        color: #FA1356;;
    }
`
export const ImagemLogo = styled.img`
    width: 95px;
    height: 35px;

`
