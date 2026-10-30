import { render, screen } from '@testing-library/react';
import Footer from '../../src/core/Footer';
import { portfolioFixture } from '../fixtures/portfolio';

describe('Footer', () => {
  it('renderiza los enlaces de contacto recibidos', () => {
    const { contact } = portfolioFixture;

    render(<Footer contact={contact} />);

    expect(screen.getByRole('link', { name: 'Email' }).getAttribute('href')).toBe(
      `mailto:${contact.email}`,
    );
    expect(screen.getByRole('link', { name: /GitHub/i }).getAttribute('href')).toBe(contact.github);
    expect(screen.getByRole('link', { name: /GitHub/i }).getAttribute('target')).toBe('_blank');
  });

  it('usa los valores por defecto cuando no recibe contacto', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: 'Email' }).getAttribute('href')).toBe(
      'mailto:josefarocaliberon@gmail.com',
    );
    expect(screen.getByRole('link', { name: /GitHub/i }).getAttribute('href')).toBe(
      'https://github.com/jocfapaz',
    );
  });
});
