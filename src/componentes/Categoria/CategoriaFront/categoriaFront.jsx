import { styled } from "styled-components";
import PropTypes from 'prop-types';
import eliminar from '../../../assets/eliminar.png'
import editar from '../../../assets/editar.png'

const BotonFrontGrande = styled.button`
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6BD1FF;
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
const FrontContainer = styled.section`
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
    
    

    @media (max-width: 768px) {
        
        justify-content: flex-start;
        overflow-x: auto;
        flex-wrap: nowrap;
        width: 80%;
        padding-bottom: 10px;
        -webkit-overflow-scrolling: touch;
    }   
    
    
    
`
const VideoCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin: 10px;
    border: 5px solid #6BD1FF;
    border-radius: 15px;
    width: 100%;
    
    img{

        width: 100%;
        height: 100%;
        z-index: 1;
        object-fit: cover;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        min-width: 250px;
        max-width: 300px;
        flex: 0 0 30%; 
    }
`
const ShadowContainer = styled.div`

position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 4px 29px rgba(107, 209, 255, 0.75);
    z-index: 2;
    pointer-events: none;
`
const ModifyContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #03122F;
    border-top: 5px solid #6BD1FF;
    box-shadow:  0 4px 29px 0 rgba(107, 209, 255, 1);
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
const CategoriaFront = ({ videos = [] }) => {
    const filteredVideos = videos.filter(video => video.id !== 1);
    return (
        
        <FrontContainer>
            <BotonFrontGrande>FRONT END</BotonFrontGrande>
            <VideoContainer>
                {filteredVideos.map(video => (
                    <VideoCard key={video.id}>
                        <img
                            src={video.photo}
                            alt="video thumbnail"
                        />
                        <ModifyContent>
                            <button><img src = {eliminar} alt="Eliminar"/>BORRAR</button>
                            <button><img src = {editar} alt="Editar"/>EDITAR</button> 
                        </ModifyContent>
                        <ShadowContainer />
                    </VideoCard>
                ))}
            </VideoContainer>
        </FrontContainer>  
    )
}

CategoriaFront.propTypes = {
    videos: PropTypes.array.isRequired,
};

export default CategoriaFront

