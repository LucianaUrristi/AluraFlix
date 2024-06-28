import { styled } from "styled-components"

const FrontContainer = styled.section`
    height: 1000px;
    display: flex;
    flex-direction: column;
    img{
        width: 100%;

    }
`




const CategoriaFront = ({BotonFrontGrande}) => {
    return (
        <FrontContainer>

            <img src={BotonFrontGrande} alt="boton-front-grande"></img>
            <h3>FRONTEND</h3>

        </FrontContainer>
        
            
    )
            
        
}

export default CategoriaFront