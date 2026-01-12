import twoOneTwo from '../../assets/212.webp';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu.tsx';
import './HomePage.css';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HomePage() {
    return (
        <>
            <div className={'homepage-outer-grid-container'}>
                <HeaderMenu />

                <section className={'submenu'}>
                    <ul>
                        <li>
                            <a
                                href={
                                    'https://docs.google.com/document/d/e/2PACX-1vQ_SycgjnmD4VUSO4N587goFXMtupzqpzJX0MwMgyP1NnA762FALdZE2jJVvsMgZXwTSgteA5gzHPjN/pub'
                                }
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faFileLines} />
                                My CV
                            </a>
                        </li>
                        {/*<li>*/}
                        {/*    <a href={'https://www.linkedin.com/in/tifisher'}>*/}
                        {/*        <FontAwesomeIcon icon={faLinkedinIn} />*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href={'https://www.linkedin.com/in/tifisher'}>*/}
                        {/*    <FontAwesomeIcon icon={faLinkedinIn} />*/}
                        {/*</a></li>*/}
                    </ul>
                </section>

                <section className={'content-container'}>
                    <div className={'photo-container'}>
                        <img src={twoOneTwo} alt="Teaching in action" />
                    </div>

                    <div className={'content'}>
                        <h2>
                            I am a passionate Software Quality Engineer with
                            over a decade of experience in Testing.
                        </h2>
                        <h2>
                            I have a strong technical background, with a
                            specialism in Java projects.
                        </h2>
                        <h2>
                            Over the years, I have built frameworks, mastered
                            templates, and developed libraries for others to
                            leverage.
                        </h2>
                        <h2>
                            As a Quality Coach, I was also responsible for
                            promoting Software Quality culture across all teams
                            in Tech.
                        </h2>
                        <h2>
                            <em>
                                I am now available immediately after redundancy
                                of the Quality job family at Capital One.
                            </em>
                        </h2>
                    </div>
                </section>

                <div className={'footer'}>
                    <h3>Thomas Ian Fisher, 2025</h3>
                </div>
            </div>
        </>
    );
}
