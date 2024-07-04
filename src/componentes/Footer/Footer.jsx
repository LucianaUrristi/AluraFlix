import logo from "../../assets/logoAlura.png";
import { styled } from 'styled-components';


const Nav = styled.nav `
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2%;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.90); ;
    border-top: 4px solid #2271D1;
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.20);
    width: 100%;
    img{
        width: 168.45px;
        height: 40px;
    }

    @media (max-width: 768px) {
            width: 120px;
            height: 30px;
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