import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    max-width:1400px;

    h3 {
        font-family:Arial;
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-family:Arial;
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    button.remover {
        border-radius:5px;
        border:none;
        color: #FFFFFF;
        background:#FF4858;
        margin-top:20px;
        padding:8px;
        cursor:pointer;
    }
    a.verRepo{
        border-radius:5px;
        border:none;
        color: #FFFFFF;
        background:#3B46DB;
        margin-top:20px;
        padding:8px;
        cursor:pointer;
        text-decoration:none;
        font-family:Arial;
        font-size:15px;
    }


    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`