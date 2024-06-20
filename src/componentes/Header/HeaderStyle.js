import styled from "styled-components";

export const HeaderNav = styled.header`
    background-color: #f7f7f7;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
`

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;

    ul {
        display: flex;
        gap: 20px;
        list-style: none;
    }

    .logo {
        height: 15vh;
    }

    li {
        cursor: pointer;
    }

    li:hover {
        color: #f1356d;
    }
`