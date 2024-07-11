import styled from "styled-components";
import Header from "../../componentes/Header/header";
import Banner from "../../componentes/Banner/banner";
import Categorias from "../../componentes/Categoria/Categorias";
import ModalZoom from "../../componentes/Modal/modal";
import Footer from "../../componentes/Footer/Footer";
import GlobalContextProvider from "../../context/GlobalContext";


const Fondo= styled.div`
    background: #262626;
    width: 100%;
    min-height: 100vh;
    height: 100%;
`;

const MainContainer = styled.main`
    display: flex;
    height: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`;
const ContenidoGaleria = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
`;


const Home = () =>{
    
    return <>
        <Fondo>
        
            <GlobalContextProvider>
                
                <Header />
                <MainContainer>
                    <ContenidoGaleria>
                        <Banner
                            titulo="Challenge React"
                            texto="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."
                        />
                        <Categorias />
                        <ModalZoom />
                    </ContenidoGaleria>
                </MainContainer>
                <Footer />
            </GlobalContextProvider>
        </Fondo>
    </>
}

export default Home