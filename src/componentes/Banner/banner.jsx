import { styled } from "styled-components";
import PropTypes from 'prop-types';

const BannerContainer = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;  
    align-items: center;
    justify-content: space-between;
    
`

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    margin: 0;
    padding: 0 5%;
    min-height: 80vh;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    
    

    @media (max-width: 768px) {
        display: flex;
        background-position-y:0;
        align-items: center;
        height: 50vh;
        margin: 0;
    }

    @media (max-width: 480px) {
        display:none;
    }
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    max-width: 50%;
    

    @media (max-width: 768px) {
        max-width: 100%;
        text-align: start;
    }
    
`
const VideoCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    overflow: hidden;
    margin: 10px;
    width: 30%;
    border: 3px solid #6BD1FF;
    border-radius: 15px;

    img{
        width: 100%;
        background-size: cover;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        min-width: 30%;
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

const TituloEstilizado = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 46px;
    color: #FFFFFF;
    max-width: 80%;
    margin-bottom: 0;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`
const Texto = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 18px;
    color: #FFFFFF;
    max-width: 65%;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`
const BotonFront = styled.button`
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6BD1FF;
    color: #FFFF;
    font-weight: 600;
    font-size: 48px;
    border-radius: 10px;
    width: 296.82px;
    height: 92px;
    border: none;
    
    @media (max-width: 768px) {
        width: 250px;
        height: 50px;
        font-size: 28px;
    }
`


const Banner = ({ backgroundImage, video, titulo, texto }) => {
    return (
        <BannerContainer>
            
            <FigureEstilizada $backgroundImage={backgroundImage}>
                
                <TextContainer>
                    <BotonFront>FRONT END</BotonFront>
                    <TituloEstilizado>{titulo}</TituloEstilizado>
                    <Texto>{texto}</Texto>
                </TextContainer>
                {video && (
                    <VideoCard>
                        <img
                            src={video.photo}
                            alt="video thumbnail"
                        />
                        <ShadowContainer/>
                    </VideoCard>
                )}
            </FigureEstilizada>
        </BannerContainer>
    );
}

Banner.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    video: PropTypes.shape({
        link: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired
    }),
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    
};

export default Banner;




// import { useState } from 'react';


// function Banner({ card, categoryLookup }) {
//     const [showDescription, setShowDescription] = useState(false);

//     if (!card || !card.category || !categoryLookup || !categoryLookup[card.category]) {
//         return null;
//     }

//     const { title, link, description } = card;
//     const { name, primaryColor } = categoryLookup[card.category];

//     const titleStyle = {
//         backgroundColor: primaryColor,

//     };

//     const toggleDescription = () => {
//         setShowDescription(!showDescription);
//     };

//     return (
//         <main id="banner" className={styles.layer} style={{ backgroundImage: `url(${banner})`, '--primary-color': primaryColor }}>
//             <div className={styles.gradient}></div> 
//             <section className={styles.content}>
//                 <h1 className={styles.name} style={titleStyle}>{name}</h1>
//                 <h2 className={styles.title}>Challenge React</h2>
//                 <p className={styles.subtitle}>
//                     Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
//                 </p>
//                 <button onClick={toggleDescription} className={styles.toggleButton}>
//                     {showDescription ? 'Ocultar descripción' : 'Ver descripción...'}
//                 </button>
//                 {showDescription && (
//                     <div className={styles.description}>
//                         <h2 className={styles.title2}>{title}</h2>
//                         <p className={styles.subtitle2}>{description}</p>
//                     </div>
//                 )}
//             </section>
//             <section className={styles.containerBanner}>
//                 <iframe
//                     src={link}
//                     title={title}
//                     className={styles.video}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                 ></iframe>
//             </section>
//         </main>
//     );
// }

// Banner.propTypes = {
//         card: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         category: PropTypes.string.isRequired,
//         link: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//     }),
//     categoryLookup: PropTypes.object.isRequired,
// };

// export default Banner;