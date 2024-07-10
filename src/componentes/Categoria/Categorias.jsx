import CategoriaFront from "./CategoriaFront/categoriaFront";
import CategoriaBack from './CategoriaBack/categoriaBack';
import CategoriaInnovacionYGestion from "./CategoriaInnovaYGestion/categoriaInnovacionYGestion";
import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const CategoriasContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0 2%;

    @media (max-width: 768px) {
        margin-top: 10%;
    }
`;


const Categorias = () => {  
    const { videos, handleEdit, handleDelete } = useContext(GlobalContext);
    const frontEndVideos = videos.filter(video => video.category === "FRONT END");
    const backEndVideos = videos.filter(video => video.category === "BACK END");
    const innovacionYGestionVideos = videos.filter(video => video.category === "INNOVACIÓN Y GESTIÓN");

    

    return (

        <CategoriasContainer>
            <CategoriaFront 
                videos={frontEndVideos} 
                alSeleccionarEditor={handleEdit} 
                onDelete={handleDelete}
            />
            <CategoriaBack 
                videos={backEndVideos} 
                alSeleccionarEditor={handleEdit} 
                onDelete={handleDelete}
            />
            <CategoriaInnovacionYGestion 
                videos={innovacionYGestionVideos}
                alSeleccionarEditor={handleEdit} 
                onDelete={handleDelete}
            />                                       
        </CategoriasContainer>
    )
}


export default Categorias

