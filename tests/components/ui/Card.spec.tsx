import { render, screen } from '@testing-library/react';
import Card from '../../../src/components/ui/Card';

describe('Card', () => {
  it('renderiza título, descripción, contenido, footer y clase personalizada', () => {
    const { container } = render(
      <Card title="Título" description="Descripción" className="clase-extra" footer={<span>Pie</span>}>
        <p>Contenido</p>
      </Card>,
    );

    const article = container.querySelector('article');

    expect(screen.getByRole('heading', { name: 'Título' })).toBeTruthy();
    expect(screen.getByText('Descripción')).toBeTruthy();
    expect(screen.getByText('Contenido')).toBeTruthy();
    expect(screen.getByText('Pie')).toBeTruthy();
    expect(article?.className).toContain('clase-extra');
  });

  it('renderiza solo el título cuando no hay contenido opcional', () => {
    render(<Card title="Solo título" />);

    expect(screen.getByRole('heading', { name: 'Solo título' })).toBeTruthy();
  });
});
