import { styled } from "styled-components"

const BotonNV = styled.button`
    font-family: "Source Sans 3", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    width: 180.13px;
    height: 54px;
    cursor: pointer;

    @media (max-width: 430px) {
        border-radius: 50px;
        background-color: rgba(34, 113, 209, 0.24);
        box-shadow: none;
        width: 154.83px;
        gap: 10px;
    }
`


export default BotonNV