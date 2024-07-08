import { PropTypes } from 'prop-types';
import FormularioEditor from '../FormularioEditor/formularioEditor';
import styled from 'styled-components';


const Overlay = styled.div`
    background-color: rgba(3, 18, 47, 0.76);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`  


const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
`

const ModalZoom = ({editor}) =>{
    return <>
        {editor && <>
            <Overlay />
            <DialogEstilizado open={!!editor}>
                <FormularioEditor editor= {editor} expandida = {true}/>
                <form method="dialog">
                    <button formMethod="dialog">close</button>
                </form>
            </DialogEstilizado>
        </>}
    </>
}

ModalZoom.propTypes = {
    editor: PropTypes.string,

};

export default ModalZoom