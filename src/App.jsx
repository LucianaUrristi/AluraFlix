import styled from "styled-components";
import Header from "./componentes/Header/header";
import GlobalStyles from "./componentes/GlobalStyles/globalStyles";
import Banner from "./componentes/Banner/banner";
import BannerBackground from "../src/assets/banner.png";
import db from "../db.json"
import Footer from "./componentes/Footer/Footer";
import Categorias from "./componentes/Categoria/Categorias";

import { useState } from "react";
import ModalZoom from "./componentes/Modal/modal";
import FormularioEditor from "./componentes/FormularioEditor/formularioEditor";

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

  const [editor, setEditor] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const handleEdit = (video) => {
    setEditor(video);
};

const handleSave = (updatedVideo) => {
    setVideos((prevVideos) =>
        prevVideos.map((video) => (video.id === updatedVideo.id ? updatedVideo : video))
    );
    setEditor(null);
};

const handleCancel = () => {
    setEditor(null);
};
  //const [videos, setVideos] = useState(Array.isArray(db.videos) ? db.videos : []);

  // Ejemplo de uso de setVideos
// const agregarVideo = (nuevoVideo) => {
//   setVideos([...videos, nuevoVideo]);
// };

// const eliminarVideo = (videoId) => {
//   const nuevosVideos = videos.filter(video => video.id !== videoId);
//   setVideos(nuevosVideos);
// };
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
                <div>
                  <Categorias videos={videos} alSeleccionarEditor={handleEdit}/>
                  {editor && (
                  <FormularioEditor
                    video={editor}
                    onSave={handleSave}
                    onCancel={handleCancel}
                  />
                  )}
                </div>
              </ContenidoGaleria>
            </MainContainer>
            
          </AppContainer>
          <ModalZoom video={selectedVideo}/>
          <Footer />
        {/* </GlobalContextProvider> */}
      </Fondo>
      
    </>
  );
};

export default App;


