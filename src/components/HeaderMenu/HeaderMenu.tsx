import './HeaderMenu.css';
import {
    faBluesky,
    faGithub,
    faLinkedinIn,
    faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from "react";

export default function HeaderMenu() {
    const [scrolling, setScrolling] = useState(false);
    const imScrolling = () => {
        window.scrollY >= 1 ? setScrolling(true) : setScrolling(false);
    };

    window.addEventListener('scroll', imScrolling);

    return (
        <section className={scrolling ? 'header-menu-scrolling' : 'header-menu'} data-testid={'header-menu'}>
            <div className={'sitename-container'}>
                <a href="/" className={'sitename'} data-testid={'site-name'}>
                    <h2>FISHBOXEN.NET</h2>
                </a>
            </div>
            <div className={'icon-list'} data-testid={'icon-list'}>
                <ul>
                    <li data-testid={'menu-item-linked-in'}>
                        <a
                            href={'https://www.linkedin.com/in/tifisher'}
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>

                    <li data-testid={'menu-item-github'}>
                        <a href={'https://github.com/FISHET'} target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>

                    <li data-testid={'menu-item-spotify'}>
                        <a
                            href={
                                'https://open.spotify.com/user/flying_hellfish'
                            }
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faSpotify} />
                        </a>
                    </li>

                    <li data-testid={'menu-item-bluesky'}>
                        <a
                            href={'https://bsky.app/profile/fishboxen.net'}
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faBluesky} />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
