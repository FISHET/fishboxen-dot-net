import './App.css'
import avatar from './assets/avatar.png'
import HeaderMenu from './components/HeaderMenu/HeaderMenu.tsx';

function App() {

    return (
        <>
            <div className={"outer-grid-container"}>
                <div>
                    <section className={"image-container"}>
                        <a href="https://www.linkedin.com/in/tifisher" target="_blank">
                            <img src={avatar} className="logo" alt="My LinkedIn"/>
                        </a>
                    </section>

                </div>
                <h1>TOM FISHER</h1>
                <h2>Experienced SDET & Quality Coach</h2>
                <HeaderMenu />
            </div>

        </>

    )
}

export default App
