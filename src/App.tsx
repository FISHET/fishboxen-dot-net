import './App.css'
import avatar from './assets/avatar.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBluesky, faGithub, faLinkedinIn, faSpotify} from "@fortawesome/free-brands-svg-icons";

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
                <section className={"menu"}>
                    <div className={"sitename-container"}>
                        <a href="/" className={"sitename"}>
                            <h2>FISHBOXEN.NET</h2>
                        </a>
                    </div>
                    <div className={"icon-list"}>
                        <ul>
                            <li>
                                <a href={"https://www.linkedin.com/in/tifisher"}>
                                    <FontAwesomeIcon icon={faLinkedinIn}/>
                                </a>
                            </li>

                            <li>
                                <a href={"https://github.com/FISHET"}>
                                    <FontAwesomeIcon icon={faGithub}/>
                                </a>
                            </li>

                            <li>
                                <a href={"https://open.spotify.com/user/flying_hellfish"}>
                                    <FontAwesomeIcon icon={faSpotify}/>
                                </a>
                            </li>

                            <li>
                                <a href={"https://bsky.app/profile/fishboxen.net"}>
                                    <FontAwesomeIcon icon={faBluesky}/>
                                </a>
                            </li>


                        </ul>
                    </div>


                </section>
            </div>

        </>

    )
}

export default App
