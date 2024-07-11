
import { createContext, useEffect, useReducer } from 'react';
import db from "../../db.json";
import { PropTypes } from 'prop-types';


export const GlobalContext = createContext();

const initialState = {
    videos: Array.isArray(db.videos) ? db.videos : [],
    selectedVideo: null,
};

const reducers = (state, action) => {
        switch (action.type) {
            case 'SET_VIDEOS':
                return {...state, videos: action.payload };
            case 'SET_SELECTED_VIDEO':
                return {...state, selectedVideo: action.payload };
            case 'SET_MOSTRAR_FORMULARIO':
                return {...state, mostrarFormulario: action.payload };
            case 'SET_CHANGE':
                return {...state, selectedVideo: {...state.selectedVideo, [action.payload.name]: action.payload.value }};

            default:
                return state;
        }
}

const GlobalContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducers, initialState);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('http://localhost:3001/videos');
                const data = await response.json();
                dispatch({ type: 'SET_VIDEOS', payload: data });
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };
        fetchVideos();
    }, []);

    
    const frontEndVideos = state.videos.filter(video => video.category === "FRONT END" && video.id != 1);
    const backEndVideos = state.videos.filter(video => video.category === "BACK END");
    const innovacionYGestionVideos = state.videos.filter(video => video.category === "INNOVACIÓN Y GESTIÓN");

    

    const handleSave = (video) => {
        const updatedVideos = state.videos.map(v => v.id === video.id ? video : v);
        dispatch({ type: 'SET_VIDEOS', payload: updatedVideos });
        dispatch({ type: 'SET_MOSTRAR_FORMULARIO', payload: false });
        dispatch({ type: 'SET_SELECTED_VIDEO', payload: null });
    };

    const handleDelete = (deletedVideo) => {
    const deletedVideos = state.videos.filter(v => v.id !== deletedVideo.id);
        dispatch({ type: 'SET_VIDEOS', payload: deletedVideos });
        dispatch({ type: 'SET_SELECTED_VIDEO', payload: null });
    };

    const handleCancel = () => {
        dispatch({ type: 'SET_MOSTRAR_FORMULARIO', payload: false });
        dispatch({ type: 'SET_SELECTED_VIDEO', payload: null });
    };

    const handleEdit = (video) => {
        dispatch({ type: 'SET_SELECTED_VIDEO', payload: video });
        dispatch({ type: 'SET_MOSTRAR_FORMULARIO', payload: true });
    };

    const handleChange = (e) => {
        
        dispatch({ type: 'SET_CHANGE', payload: { name: e.target.name, value: e.target.value } });
        
    };

    const globalState = { 
        videos: state.videos,
        selectedVideo: state.selectedVideo,
        mostrarFormulario: state.mostrarFormulario,
        handleEdit,
        handleDelete,
        handleSave,
        handleCancel,
        frontEndVideos,
        backEndVideos,
        innovacionYGestionVideos,
        handleChange,
    }

    return (
        <GlobalContext.Provider value={{ globalState, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );


}
GlobalContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalContextProvider