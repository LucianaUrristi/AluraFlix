import logo from "../../assets/logoAlura.png";
import { styled } from 'styled-components';
import BotonHome from "../Botones/botonHome";
import home from "../../assets/home.png";
import nuevoVideo from "../../assets/NuevoVideo.png";


const Foot = styled.nav `
    margin-top:5%;
    width: 100%;
    height: 9vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2%;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.90); ;
    border-top: 4px solid #2271D1;
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 1);

    img{
        width: 100%;
        height: 100%;
    }

    @media ( max-width:430px){
        
        .logo{
            display: none;
        }
    }
`
const Butons = styled.div`
    display: none;

    @media (max-width: 430px) {
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
        gap:20%;
        

        .home{
            width: auto;
            height: auto;
            cursor: pointer;
        }

        .nuevoVideo{
            width: auto;
            height: auto;
            cursor: pointer;
        }
        
    }
`

const Footer = () => {
    return (
        <Foot>
            <a href="/">
                <img className="logo" src={logo} alt="Logo de Space App" />
            </a>
            
            <Butons>
                <BotonHome><img className="home" src={home} alt="Home"/>HOME</BotonHome>
                <img className="nuevoVideo" src={nuevoVideo} alt="NuevoVideo"/>
                {/* <HeaderLink url="./">INICIO</HeaderLink>
                <HeaderLink url="./newVideo">NUEVO VIDEO</HeaderLink> */}
            </Butons>

            
        
            
            
        </Foot>
    )
}

export default Footer