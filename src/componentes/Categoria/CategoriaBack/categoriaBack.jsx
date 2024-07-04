import { styled } from "styled-components"
import PropTypes from 'prop-types';

const BotonBackGrande = styled.button`
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00C86F;
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
const BackContainer = styled.section`
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
        border: 3px solid #00C86F;
        box-shadow: 0px 5px 29px rgba(0, 200, 111, 0.3);
    }
`;

const CategoriaBack = ({ videos = [] }) => {
    return (
        <BackContainer>
            <BotonBackGrande>BACK END</BotonBackGrande>
            <VideoContainer>
                {videos.map(video => (
                    <VideoCard key={video.id}>
                        <iframe
                            src={video.link}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </VideoCard>
                ))}
            </VideoContainer>
        </BackContainer>  
    )
}

CategoriaBack.propTypes = {
    videos: PropTypes.array.isRequired,
};

export default CategoriaBack

