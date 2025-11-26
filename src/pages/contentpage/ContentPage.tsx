import HeaderMenu from '../../components/HeaderMenu/HeaderMenu.tsx';
import './ContentPage.css';

export default function ContentPage() {
    return (
        <>
            <div className={'contentpage-outer-grid-container'}>
                <HeaderMenu />

                <section className={'side-bar'}>
                    <h2>this is the sidebar</h2>
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
