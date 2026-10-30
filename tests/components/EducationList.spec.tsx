import { render, screen } from '@testing-library/react';
import EducationList from '../../src/components/about/EducationList';
import { portfolioFixture } from '../fixtures/portfolio';

describe('EducationList', () => {
  it('renderiza la formación recibida por props', () => {
    const education = portfolioFixture.education[0];

    render(<EducationList items={portfolioFixture.education} />);

    expect(screen.getByText(education.title)).toBeTruthy();
    expect(screen.getByText(education.institution)).toBeTruthy();
    expect(screen.getByText(education.period)).toBeTruthy();
  });

  it('muestra un mensaje cuando no hay formación', () => {
    render(<EducationList items={[]} />);

    expect(screen.getByText(/No hay información educativa/)).toBeTruthy();
  });
});
