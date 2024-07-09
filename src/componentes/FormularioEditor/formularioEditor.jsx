import PropTypes from 'prop-types';
import styled from 'styled-components';
import BotonHome from '../Botones/botonHome';
import BotonNV from '../Botones/botonNV';
import { useState } from 'react';

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

const FormularioEditor = ({ video, onSave, onCancel}) => {
    const [formValues, setFormValues] = useState({
        id: video.id,
        title: video.title,
        category: video.category,
        photo: video.photo,
        link: video.link,
        description: video.description,
    });
    
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formValues);
    };
    
    const handleCancel = () => {
        setFormValues({
            title: video.title,
            category: video.category,
            photo: video.photo,
            link: video.link,
            description: video.description,
        });
        onCancel();
    };
    
    if (!video) {
        return null;
    }


    return (
        <FormContainer onSubmit={handleSubmit}>
                <FormTitulo>EDITAR CARD:</FormTitulo>
                    <Form>
                        
                        <Label>Título</Label>
                            <input
                                type="text"
                                name="title"
                                value={formValues.title}
                                onChange={handleChange}
                            />
                        <Label>Categoría</Label>
                            <select name="category"
                                value={formValues.category}
                                onChange={handleChange}>
                                    <option  value={formValues.category.value}>{formValues.category}</option>
                                    <option  value="FRONT END">FRONT END</option>
                                    <option  value="BACK END">BACK END</option>
                                    <option  value="INNOVACIÓN Y GESTIÓN">INNOVACIÓN Y GESTIÓN</option>
                            </select>
                        <Label>Imagen</Label>
                            <input
                                type="text"
                                name="photo"
                                value={formValues.photo}
                                onChange={handleChange}
                            />
                        <Label>Video</Label>
                            <input
                                type="text"
                                name="link"
                                value={formValues.link}
                                onChange={handleChange}
                            />
                        <Label>Description</Label>
                            <textarea
                                name="description"
                                value={formValues.description}
                                onChange={handleChange}
                            />
                        <Botones>
                            <BotonHome type="button" onClick={handleSubmit}>GUARDAR</BotonHome>
                            <BotonNV type="button" onClick={handleCancel}>CANCELAR</BotonNV>
                        </Botones>
                    </Form>
                </FormContainer>
    );
};

FormularioEditor.propTypes = {
    video: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default FormularioEditor;
