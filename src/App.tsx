import './App.css';
import HomePage from './pages/homepage/HomePage.tsx';
import IntroPage from './pages/intropage/IntroPage.tsx';
import {HashRouter, Route, Routes} from 'react-router-dom';

export default function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path={'/'} element={<IntroPage />} />
                    <Route path="/home" index element={<HomePage />} />
                </Routes>
            </HashRouter>
        </>
    );
}
