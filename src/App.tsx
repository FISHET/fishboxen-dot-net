import './App.css';
import HomePage from './pages/homepage/HomePage.tsx';
import IntroPage from './pages/intropage/IntroPage.tsx';
import ScrollToTop from './utils/ScrollToTop.tsx';
import { HashRouter, Route, Routes } from 'react-router-dom';

export function App() {
    return (
        <>
            <HashRouter>
                <ScrollToTop />
                <Routes>
                    <Route path={'/'} element={<IntroPage />} />
                    <Route path="/home" index element={<HomePage />} />
                </Routes>
            </HashRouter>
        </>
    );
}
