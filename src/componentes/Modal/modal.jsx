import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import FormularioEditor from '../FormularioEditor/formularioEditor';

const Overlay = styled.div`
    background-color: rgba(3, 18, 47, 0.76);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
`  
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    z-index: 100;
    background-color: transparent;
    border: none;
`

const ModalZoom = ({ video, mostrarFormulario, onSave, onCancel }) =>{
    
    
    if (!video) {
        return null;
    }

    return <>
        <>
            <Overlay />
            <DialogEstilizado open={!!video}>
                <div>
                    {mostrarFormulario && (
                        <FormularioEditor 
                            video={video} 
                            onSave={onSave} 
                            onCancel={onCancel} 
                        />
                    )}
                </div>
            </DialogEstilizado>
        </>
    </>
}

ModalZoom.propTypes = {
    video: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    mostrarFormulario: PropTypes.bool,
};

export default ModalZoom