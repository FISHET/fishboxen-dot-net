import './HeaderMenu.css';
import {
    faBluesky,
    faGithub,
    faLinkedinIn,
    faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeaderMenu() {
    return (
        <section className={'header-menu'} data-testid={'header-menu'}>
            <div className={'sitename-container'}>
                <a href="/" className={'sitename'}>
                    <h2>FISHBOXEN.NET</h2>
                </a>
            </div>
            <div className={'icon-list'}>
                <ul>
                    <li>
                        <a
                            href={'https://www.linkedin.com/in/tifisher'}
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>

                    <li>
                        <a href={'https://github.com/FISHET'} target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>

                    <li>
                        <a
                            href={
                                'https://open.spotify.com/user/flying_hellfish'
                            }
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faSpotify} />
                        </a>
                    </li>

                    <li>
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
