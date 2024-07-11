import logo from "../../assets/logoAlura.png";
// import HeaderLink from "../headerLink/HeaderLink";
import { styled } from 'styled-components';
import BotonHome from './../Botones/botonHome';
import BotonNV from "../Botones/botonNV";
import { Link } from "react-router-dom";


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
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.75);
    width: 100%;
    z-index: 2;


    img{
        width: 168.45px;
        height: 40px;
    }

    @media (max-width: 430px) {
        display: none;
    }

`
const Botones = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    
    
    @media (max-width: 768px) {
        gap: 15px;
        width: 50%;
        
    }

    
`

const Header = () => {
    return (
        <Nav>
            <a href="/">
                <img src={logo} alt="Logo de Space App" />
            </a>
            <Botones>
                <Link to="/">
                <BotonHome>HOME</BotonHome>
                </Link>
                <Link to="/NuevoVideo"> 
                    <BotonNV>NUEVO VIDEO</BotonNV>
                </Link>
                
            </Botones>
            
        </Nav>
    )
}

export default Header


