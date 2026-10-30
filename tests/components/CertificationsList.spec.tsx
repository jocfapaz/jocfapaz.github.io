import { render, screen } from '@testing-library/react';
import CertificationsList from '../../src/components/certifications/CertificationsList';
import { portfolioFixture } from '../fixtures/portfolio';

describe('CertificationsList', () => {
  it('renderiza las certificaciones y su estado', () => {
    const certification = portfolioFixture.certifications[0];

    render(<CertificationsList items={portfolioFixture.certifications} />);

    expect(screen.getByText(certification.title)).toBeTruthy();
    expect(screen.getByText(`${certification.institution} (${certification.year})`)).toBeTruthy();
    expect(screen.getByText(certification.status)).toBeTruthy();
  });

  it('muestra un mensaje cuando no hay certificaciones', () => {
    render(<CertificationsList items={[]} />);

    expect(screen.getByText(/No hay certificaciones para mostrar/)).toBeTruthy();
  });
});
