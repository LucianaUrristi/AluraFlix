import PropTypes from 'prop-types';
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
    width: ${(props) => (props.$expandida ? "90%" : "974px")};
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

const FormularioEditor = ({ video, onSave, onCancel, expandida = false }) => {
    if (!video) {
        return null;
    }

    const { title, category, photo, link, description } = video;

    return (
        <FormContainer $expandida={expandida}>
            <FormTitulo>EDITAR CARD:</FormTitulo>
            <Form onSubmit={(e) => {
                e.preventDefault();
                onSave({ title, category, photo, link, description });
                }}>
                
                <Label>Título</Label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => onSave({ ...video, title: e.target.value })}
                    />
                <Label>Categoría</Label>
                    <select
                        value={category}
                        onChange={(e) => onSave({ ...video, category: e.target.value })}>
                            <option  value={category.value}>{category}</option>
                            <option  value={category.value}>FRONT END</option>
                            <option  value={category.value}>BACK END</option>
                            <option  value={category.value}>INNOVACIÓN Y GESTIÓN</option>
                    
                    
                    </select>
                <Label>Imagen</Label>
                    <input
                        type="text"
                        value={photo}
                        onChange={(e) => onSave({ ...video, photo: e.target.value })}
                    />
                <Label>Video</Label>
                    <input
                        type="text"
                        value={link}
                        onChange={(e) => onSave({ ...video, link: e.target.value })}
                    />
                
                <Label>Description</Label>
                    <textarea
                        value={description}
                        onChange={(e) => onSave({ ...video, description: e.target.value })}
                    />
                <Botones>
                    <BotonHome type="submit">GUARDAR</BotonHome>
                    <BotonNV type="button" onClick={onCancel}>LIMPIAR</BotonNV>
                </Botones>
            </Form>
        </FormContainer>
    );
};

FormularioEditor.propTypes = {
    video: PropTypes.object,
    category: PropTypes.string,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    expandida: PropTypes.bool,
};

export default FormularioEditor;
