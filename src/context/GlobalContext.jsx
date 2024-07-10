
import { createContext, useState, useContext } from 'react';
import db from "../../db.json";
import { PropTypes } from 'prop-types';


export const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
    const [videos, setVideos] = useState(Array.isArray(db.videos) ? db.videos : []);
    const video = videos.find(v => v.id === 1);

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const handleSave = (updatedVideo) => {
        const updatedVideos = videos.map(v => v.id === updatedVideo.id ? updatedVideo : v);
        setVideos(updatedVideos);
        setMostrarFormulario(false);
        setSelectedVideo(null);
    };

    const handleDelete = (deletedVideo) => {
    const deletedVideos = videos.filter(v => v.id !== deletedVideo.id);
        setVideos(deletedVideos);
        setSelectedVideo(null);
    };

    const handleCancel = () => {
        setMostrarFormulario(false);
        setSelectedVideo(null);
    };

    const handleEdit = (video) => {
        setSelectedVideo(video); 
        setMostrarFormulario(true); 
    };

    // const fetchVideos = async () => {
    //     try {
    //         const response = await fetch('http://localhost:3000/videos');
    //         const data = await response.json();
    //         setVideos(data);
    //     } catch (error) {
    //         console.error('Error fetching videos:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchVideos();
    // }, []);


    return (
        <GlobalContext.Provider value={{ video, 
                                        videos, 
                                        selectedVideo,
                                        mostrarFormulario,
                                        handleEdit,
                                        handleDelete,
                                        handleSave,
                                        handleCancel}}>
            {children}
        </GlobalContext.Provider>
    );
// };

}
GlobalContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobalContextProvider