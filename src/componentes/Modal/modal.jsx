import styled from 'styled-components';
import FormularioEditor from '../FormularioEditor/formularioEditor';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';


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

const ModalZoom = () =>{
    const { selectedVideo, mostrarFormulario, handleSave, handleCancel } = useContext(GlobalContext);

    
    if (!selectedVideo) {
        return null;
    }

    return <>
        <>
            <Overlay />
            <DialogEstilizado open={!!selectedVideo}>
                <div>
                    {mostrarFormulario && (
                        <FormularioEditor 
                            video={selectedVideo} 
                            onSave={handleSave} 
                            onCancel={handleCancel} 
                        />
                    )}
                </div>
            </DialogEstilizado>
        </>
    </>
}


export default ModalZoom