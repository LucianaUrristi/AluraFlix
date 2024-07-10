import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import { VideoProvider } from "../contexts/VideoContext.jsx";
import Home from "../pages/Home/Home.jsx";
import NuevoVideo from '../pages/NuevoVideo/NuevoVideo';

const AppContainer = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
    height: 100%;
`;

function AppRoutes() {
    return (
        // <VideoProvider>
            <BrowserRouter>
                <AppContainer>
                    <div className="content">
                        <Routes>
                            <Route index element={<Home />}></Route>
                            <Route path="NuevoVideo" element={<NuevoVideo />}></Route>
                        </Routes>
                    </div>
                    
                </AppContainer>
            </BrowserRouter>
        // </VideoProvider>
    );
}

export default AppRoutes;