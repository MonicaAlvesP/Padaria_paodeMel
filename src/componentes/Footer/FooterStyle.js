import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
    bottom: 0;
    width: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

    button {
        background-color: #f1356d;
        color: #fff;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    section {
        display: flex;
        gap: 10px;
    }

    h3 {
        margin: 0;
    }
`