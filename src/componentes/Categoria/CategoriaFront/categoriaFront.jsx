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
    margin: 0 0.5%;
    /* cursor: pointer; */

    @media (max-width: 430px) {
        width: 286px;
        height: 70px;
        font-size: 24px;
    }
`
const FrontContainer = styled.section`
    /* height: auto; */
    display: flex;
    flex-direction: column;
    margin: 1%;
`

const VideoContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`
const VideoCard = styled.div`
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    iframe {
        width: 30vw;
        height: 30vh;
        border-radius: 15px 15px 0 0;
        border: 3px solid #6BD1FF;
        box-shadow: 0px 5px 29px rgba(107, 209, 255, 0.3);

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

CategoriaFront.propTypes = {
    videos: PropTypes.array.isRequired,
};

export default CategoriaFront

