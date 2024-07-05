import logo from "../../assets/logoAlura.png";
import { styled } from 'styled-components';


const Nav = styled.nav `
    margin-top:5%;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2%;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.90); ;
    border-top: 4px solid #2271D1;
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 1);
    width: 100%;
    img{
        width: 100%;
        height: 100%;
    }
`

const Footer = () => {
    return (
        <Nav>
            <a href="/">
                <img src={logo} alt="Logo de Space App" />
            </a>
            
            

            {/* <HeaderLink url="./">INICIO</HeaderLink>
            <HeaderLink url="./newVideo">NUEVO VIDEO</HeaderLink> */}
        
            
            
        </Nav>
    )
}

export default Footer