import styled from "styled-components"

export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? "#AC1010" :
    "#0467FB")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    font-family: "Roboto Slab", sans-serif;
    transition: 0.3s !important;

    &:hover {
        transition: all 0.3s ease-out;
        background: ${({ primary }) => (primary ? "#C31212" : "FF4040")};
        transform: translateY(-2px);
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
    `