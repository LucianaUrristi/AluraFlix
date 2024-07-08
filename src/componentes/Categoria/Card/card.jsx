import { styled } from "styled-components";
import BotonIcono from "../../Botones/botonIcono";
import eliminar from '../../../assets/eliminar.png'
import editar from '../../../assets/editar.png'
import { PropTypes } from 'prop-types';

const categoryColors={
    "FRONT END": "rgba(107, 209, 255, 0.75)",
    "BACK END": "rgba(0, 200, 111, 0.75)",
    "INNOVACIÓN Y GESTIÓN": "rgba(255, 186, 5, 0.75)"
};

const Figure = styled.figure`
    width: 100%;
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    border-radius: 15px;

    
`;

const VideoCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin: 10px;
    border: 5px solid ${(props) => categoryColors[props.category]};
    border-radius: 15px;
    width: 100%;
    margin: 5% 0;
    
    img{
        width: 100%;
        z-index: 1;
        object-fit: cover;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        
        min-width: 250px; 
    }
    @media (max-width: 430px) {
        width: 100%;
        min-width: 340px; 
    }

`
const ShadowContainer = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 4px 29px ${(props) => categoryColors[props.category]};
    z-index: 2;
    pointer-events: none;
`
const Pie = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: #03122F;
    border-top: 5px solid ${(props) => categoryColors[props.category]};
    box-shadow:  0 4px 29px 0 ${(props) => categoryColors[props.category]};
    z-index: 2;
    max-height:3rem;
`

const Card = ({video, onEdit}) => {
    
    return (
        <Figure>
            <VideoCard category={video.category}>
                <img src={video.photo} alt="video thumbnail" />

                <Pie category={video.category}>
                    <BotonIcono>
                        <img className="botones" src={eliminar} alt="Eliminar" />
                        BORRAR
                    </BotonIcono>
                    <BotonIcono
                        onClick={() => onEdit(video)}>
                        <img className="botones" src={editar} alt="Editar" />
                        EDITAR
                    </BotonIcono>
                </Pie>
                
                <ShadowContainer category={video.category}/>
            </VideoCard>
    </Figure>)
};

Card.propTypes = {
    video: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default Card;
