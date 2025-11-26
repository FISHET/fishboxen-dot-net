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
                                    'https://drive.google.com/file/d/1MHGB9RdpAsbQsa8EyUR-D1b7HQVR7X6B/view?usp=sharing'
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

                <section className={'content'}>
                    <h1>Hello, World!</h1>
                </section>

                <div className={'footer'}>
                    <h1>this is the footer</h1>
                </div>
            </div>
        </>
    );
}
