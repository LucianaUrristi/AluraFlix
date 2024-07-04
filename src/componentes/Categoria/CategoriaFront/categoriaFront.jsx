import { styled } from "styled-components";
import PropTypes from 'prop-types';

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
    cursor: pointer;

    @media (max-width: 430px) {
        width: 286px;
        height: 70px;
        font-size: 24px;
    }
`
const FrontContainer = styled.section`
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 1%;
    width: 100%;
`

const VideoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f0f0f0;
    }

    ::-webkit-scrollbar-thumb {
        background: #D6D6D6;
        border-radius: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #9b9999;
}

`
const VideoCard = styled.div`
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    
    iframe {
        width: 100%;
        height: 100%;
        border-radius: 15px 15px 0 0;
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
                        
                        <iframe
                            src={video.link}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        
                    </VideoCard>
                ))}
            </VideoContainer>
        </FrontContainer>
        
        
            
    )
            
        
}

export default CategoriaFront

CategoriaFront.propTypes = {
    videos: PropTypes.array.isRequired,
};