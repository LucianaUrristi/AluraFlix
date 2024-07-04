import logo from "../../assets/logoAlura.png";
// import HeaderLink from "../headerLink/HeaderLink";
import { styled } from 'styled-components';
import BotonHome from './../Botones/botonHome';
import BotonNV from "../Botones/botonNV";


const Nav = styled.nav `
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    box-sizing: border-box;
    background-color: #262626;
    border-bottom: 4px solid #2271D1;
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.2);
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

const Botones = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    
    @media (max-width: 768px) {
        gap: 15px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`
 {/* <CampoTexto /> */}
const Header = () => {
    return (
        <Nav>
            <a href="/">
                <img src={logo} alt="Logo de Space App" />
            </a>
            <Botones>
                <BotonHome>HOME</BotonHome>
                <BotonNV>NUEVO VIDEO</BotonNV>
            </Botones>
            

            {/* <HeaderLink url="./">INICIO</HeaderLink>
            <HeaderLink url="./newVideo">NUEVO VIDEO</HeaderLink> */}
        
            
            
        </Nav>
    )
}

export default Header


