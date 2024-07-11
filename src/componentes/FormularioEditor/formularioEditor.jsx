import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import styled from 'styled-components';
import BotonHome from '../Botones/botonHome';
import BotonNV from '../Botones/botonNV';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #03122F;
    border: 5px solid #6BD1FF;
    border-radius: 15px;
    height: 714.5px;
    margin: auto;
    padding: 5%;

    @media (max-width: 768px) {
        width: 80%;
        height: auto
        
    }
`
const FormTitulo = styled.h1`
    font-family: 'Roboto', sans-serif;
    margin: 0;
    font-size: 60px;
    color: #2271d1;
    padding: 5%;
`
const Label = styled.label`
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
    color: #FFFF;
    margin:5px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;

    input,
    select,
    textarea{
        background-color: transparent;
        border: 3px solid #2271d1;
        border-radius: 10px;
        padding: 10px;
        color: #A5A5A5;
        width: 573px;
        text-align: justify;
        margin-bottom: 5%;

        @media (max-width: 768px) {
        width: 90%;
        }
    }
    select{
        width: 100%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
`
const Botones = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 5%;
`

const FormularioEditor = () => {
    const { globalState } = useContext(GlobalContext);

    if (!globalState.selectedVideo) {
        return null;
    }

    return (
        <FormContainer>
            <FormTitulo>EDITAR CARD:</FormTitulo>
                <Form>
                    
                    <Label>Título</Label>
                        <input
                            type="text"
                            name="title"
                            value={globalState.selectedVideo.title}
                            onChange={globalState.handleChange}
                        />
                    <Label>Categoría</Label>
                        <select name="category"
                            value={globalState.selectedVideo.category}
                            onChange={globalState.handleChange}>
                                <option  value={globalState.selectedVideo.category}>{globalState.selectedVideo.category}</option>
                                <option  value="FRONT END">FRONT END</option>
                                <option  value="BACK END">BACK END</option>
                                <option  value="INNOVACIÓN Y GESTIÓN">INNOVACIÓN Y GESTIÓN</option>
                        </select>
                    <Label>Imagen</Label>
                        <input
                            type="text"
                            name="photo"
                            value={globalState.selectedVideo.photo}
                            onChange={globalState.handleChange}
                        />
                    <Label>Video</Label>
                        <input
                            type="text"
                            name="link"
                            value={globalState.selectedVideo.link}
                            onChange={globalState.handleChange}
                        />
                    <Label>Description</Label>
                        <textarea
                            name="description"
                            value={globalState.selectedVideo.description}
                            onChange={globalState.handleChange}
                        />
                    <Botones>
                        <BotonHome type="button" onClick={() =>globalState.handleSave(globalState.selectedVideo)}>GUARDAR</BotonHome>
                        <BotonNV type="button" onClick={globalState.handleCancel}>CANCELAR</BotonNV>
                    </Botones>
                </Form>
        </FormContainer>
    );
};

export default FormularioEditor;
