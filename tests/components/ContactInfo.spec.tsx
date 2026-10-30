import { render, screen } from '@testing-library/react';
import ContactInfo from '../../src/components/contact/ContactInfo';
import { portfolioFixture } from '../fixtures/portfolio';

describe('ContactInfo', () => {
  it('renderiza los datos de contacto y sus enlaces', () => {
    const contact = portfolioFixture.contact;

    render(<ContactInfo contact={contact} />);

    const emailLink = screen.getByRole('link', { name: contact.email });
    const phoneLink = screen.getByRole('link', { name: contact.phone });

    expect(emailLink.getAttribute('href')).toBe(`mailto:${contact.email}`);
    expect(phoneLink.getAttribute('href')).toBe(`tel:${contact.phone.replace(/\s+/g, '')}`);
    expect(screen.getByText(contact.location)).toBeTruthy();
  });
});
