import avatar from '../../assets/avatar.webp';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu.tsx';
import './IntroPage.css';

export default function IntroPage() {
    return (
        <>
            <div className={'outer-grid-container'}>
                <HeaderMenu />
                <div>
                    <section className={'image-container'}>
                        <a href="/#home">
                            <img
                                data-testid="big-avatar"
                                src={avatar}
                                className="logo"
                                alt="Come on in"

                            />
                        </a>
                    </section>
                </div>
                <h1>TOM FISHER</h1>
                <h2>Experienced SDET & Quality Coach</h2>
            </div>
        </>
    );
}
