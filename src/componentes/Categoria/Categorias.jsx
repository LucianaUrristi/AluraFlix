import CategoriaFront from "./CategoriaFront/categoriaFront";
import CategoriaBack from './CategoriaBack/categoriaBack';
import CategoriaInnovacionYGestion from "./CategoriaInnovaYGestion/categoriaInnovacionYGestion";
import PropTypes from 'prop-types';
import styled from "styled-components";

const CategoriasContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0 2%;

    @media (max-width: 768px) {
        margin-top: 10%;
    }
`;



const Categorias = ( {videos = [], alSeleccionarEditor, alSolicitarZoom, onDelete } ) => {  
    const frontEndVideos = videos.filter(video => video.category === "FRONT END");
    const backEndVideos = videos.filter(video => video.category === "BACK END");
    const innovacionYGestionVideos = videos.filter(video => video.category === "INNOVACIÓN Y GESTIÓN");

    return (

        <CategoriasContainer>
            <CategoriaFront 
                videos={frontEndVideos} 
                alSeleccionarEditor={alSeleccionarEditor} 
                alSolicitarZoom={alSolicitarZoom}
                onDelete={onDelete}
            />
            <CategoriaBack 
                videos={backEndVideos} 
                alSeleccionarEditor={alSeleccionarEditor} 
                alSolicitarZoom={alSolicitarZoom}
                onDelete={onDelete}
            />
            <CategoriaInnovacionYGestion 
                videos={innovacionYGestionVideos}
                alSeleccionarEditor={alSeleccionarEditor} 
                alSolicitarZoom={alSolicitarZoom}
                onDelete={onDelete}
            />                                       
        </CategoriasContainer>
    )
}

Categorias.propTypes = {
    videos: PropTypes.array.isRequired,
    alSeleccionarEditor: PropTypes.func.isRequired,
    alSolicitarZoom: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Categorias

