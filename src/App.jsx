import styled from "styled-components";
import Header from "./componentes/Header/header";
import GlobalStyles from "./componentes/GlobalStyles/globalStyles";
import Banner from "./componentes/Banner/banner";
import BannerBackground from "../src/assets/banner.png";
import db from "../db.json"
import Footer from "./componentes/Footer/Footer";
import Categorias from "./componentes/Categoria/Categorias";

import { useState } from "react";

const Fondo= styled.div`
  background: #262626;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;
const AppContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
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

const App = () => {
  const [videos, setVideos] = useState(Array.isArray(db.videos) ? db.videos : []);
  const video = videos.find(v => v.id === 1);
  console.log('Video data:', video);
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
                  video={video}
                  titulo="Challenge React"
                  texto="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."
                  backgroundImage={BannerBackground}

                />
                <Categorias videos={videos}/>
                
                
              </ContenidoGaleria>
            </MainContainer>
          </AppContainer>
          {/* <ModalZoom /> */}
          <Footer />
        {/* </GlobalContextProvider> */}
      </Fondo>
      
    </>
  );
};

export default App;
