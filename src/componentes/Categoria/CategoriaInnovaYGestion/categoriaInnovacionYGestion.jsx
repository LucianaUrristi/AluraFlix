import { styled } from "styled-components"
import PropTypes from 'prop-types';
import eliminar from '../../../assets/eliminar.png'
import editar from '../../../assets/editar.png'

const BotonIYGGrande = styled.button`
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFBA05;
    color: #FFFF;
    font-weight: 600;
    font-size: 32px;
    border-radius: 10px;
    width: 432px;
    height: 70px;
    border: none;
    margin: 0 0.5%;
    
    @media (max-width: 430px) {
        width: 286px;
        height: 70px;
        font-size: 24px;
    }
`
const IyGContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: 1%;
    
    @media (max-width: 768px) {
        align-items: center;
    }
`
const VideoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;    

`
const VideoCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin: 10px;
    width: 30vw;
    border: 5px solid #FFBA05;
    border-radius: 15px;

    img{

        width: 100%;
        height: 100%;
        z-index: 1;
        object-fit: cover;
        cursor: pointer;
    }
`
const ShadowContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 4px 29px rgba(255, 186, 5, 0.75);
    z-index: 2;
    pointer-events: none;
`
const ModifyContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #03122F;
    border-top: 5px solid #FFBA05;
    box-shadow:  0 4px 29px 0 rgba(255, 186, 5, 1);
    z-index: 2;

    button{
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        color: #FFFF;
        font-weight: 600;
        background-color: transparent;
        border-radius: 10px;
        width: 180.13px;
        height: 54px;
        cursor: pointer;
        border: none;
        margin: 0 0.5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    
    img{
        width: 20px;
        height: 20px;
        z-index: 2;
        pointer-events: none;
        border: none;
    }
`

// const Figure = styled.figure`
//     width: ${(props) => (props.$expandida ? '90%' : '460px')};
//     /* max-width: 100%; */
//     margin: 0;
//     display: flex;
//     flex-direction: column;
//     & > img {
//         max-width: 100%;
//         border-radius: 20px 20px 0 0;
//     }
// `

const CategoriaInnovacionYGestion = ({ videos = [] }) => {
    return (
        <IyGContainer>
            <BotonIYGGrande>INNOVACIÓN Y GESTIÓN</BotonIYGGrande>
            <VideoContainer>
                {videos.map(video => (
                    <VideoCard key={video.id}>
                        <img
                            src={video.photo}
                            alt="video thumbnail"
                        />
                        <ModifyContent>
                            <button><img src = {eliminar}/>BORRAR</button>
                            <button><img src = {editar}/>EDITAR</button> 
                        </ModifyContent>
                        <ShadowContainer />
                    </VideoCard>
                ))}
            </VideoContainer>
        </IyGContainer>
    )
}

CategoriaInnovacionYGestion.propTypes = {
    videos: PropTypes.array.isRequired,
};

export default CategoriaInnovacionYGestion

