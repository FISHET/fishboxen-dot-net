import HeaderMenu from '../../../components/HeaderMenu/HeaderMenu.tsx';
import { render, screen } from '../../test-utils.tsx';

describe('HeaderMenu Component', () => {
    it('should have the correct class type', () => {
        render(<HeaderMenu />);

        const headerMenuElement = screen.getByTestId('header-menu');

        expect(headerMenuElement).toBeInTheDocument();
        expect(headerMenuElement.className).toBe('header-menu');
    });

    it('should have a title element with the correct name', () => {});
});
