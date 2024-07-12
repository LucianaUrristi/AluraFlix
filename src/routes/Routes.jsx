import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../pages/Home/Home.jsx";
import NuevoVideo from '../pages/NuevoVideo/NuevoVideo';
import GlobalContextProvider from "../context/GlobalContext.jsx";

const AppContainer = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
    height: 100%;
`;

function AppRoutes() {
    return (
        <GlobalContextProvider>
            <BrowserRouter>
                <AppContainer>
                    <Routes>
                        <Route index element={<Home />}></Route>
                        <Route path="/NuevoVideo" element={<NuevoVideo />}></Route>
                    </Routes>
                </AppContainer>
            </BrowserRouter>
        </GlobalContextProvider>
    );
}

export default AppRoutes;