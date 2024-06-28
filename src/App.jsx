import styled from "styled-components";
import Header from "./componentes/Header/header";
import GlobalStyles from "./componentes/GlobalStyles/globalStyles";
import Banner from "./componentes/Banner/banner";
import BanerBackground from "../public/img/banner.png";
import BotonFrontChico from "./assets/Front-chico.png";
import BotonFrontGrande from "./assets/Front-grande.png";
import CategoriaFront from "./componentes/Categoria/categoriaFront";

const Fondo= styled.div`
  background: #262626;
  width: 100%;
  min-height: 100vh;
`;
const AppContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
`;
const MainContainer = styled.main`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
      flex-direction: column;
      gap: 16px;
      padding: 8px;
  }
`;
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  return (
    <>
      <Fondo>
        <GlobalStyles />
        {/* <GlobalContextProvider> */}
          <AppContainer>
            <Header />
            <MainContainer>
              
              <ContenidoGaleria>
                <Banner 
                  botonFront={BotonFrontChico}
                  titulo="Challenge React"
                  texto="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."
                  backgroundImage={BanerBackground}
                />
                <CategoriaFront 
                  botonFrontGrande= {BotonFrontGrande}
                />
                {/* <Galeria /> */}
              </ContenidoGaleria>
            </MainContainer>
          </AppContainer>
          {/* <ModalZoom /> */}
          {/* <Pie /> */}
        {/* </GlobalContextProvider> */}
      </Fondo>
      
    </>
  );
};

export default App;
