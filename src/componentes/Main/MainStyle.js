import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: 20px;
    padding: 20px;

    h1 {
        color: #333;
        text-align: center;
        width: 100%;
    }
`

export const Card = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 300px;
    margin: 10px;
    flex: 1;

    img {
        height: 200px;
        width: 200px;
        border-radius: 50px;
    }
`

export const Cart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 15px;

    h2 {
        color: #333;
        font-size: 1.5rem;
    }

    p {
        color: #333;
        font-size: 1.2rem;
    }

    button {
        background-color: #f1356d;
        justify-content: center;
        color: #fff;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #f1356d;
    }

    button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`