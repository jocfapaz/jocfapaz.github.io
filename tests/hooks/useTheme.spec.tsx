import { fireEvent, render, screen } from '@testing-library/react';
import { useTheme } from '../../src/hooks/useTheme';

function ThemeProbe() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button type="button" onClick={toggleTheme}>
      {theme}
    </button>
  );
}

describe('useTheme', () => {
  it('usa el tema claro por defecto y lo guarda', () => {
    spyOn(window, 'matchMedia').and.returnValue({ matches: false } as MediaQueryList);

    render(<ThemeProbe />);

    expect(screen.getByRole('button').textContent).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('usa el tema oscuro del sistema cuando no hay preferencia guardada', () => {
    spyOn(window, 'matchMedia').and.returnValue({ matches: true } as MediaQueryList);

    render(<ThemeProbe />);

    expect(screen.getByRole('button').textContent).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('prioriza el tema guardado sobre la preferencia del sistema', () => {
    localStorage.setItem('theme', 'light');
    spyOn(window, 'matchMedia').and.returnValue({ matches: true } as MediaQueryList);

    render(<ThemeProbe />);

    expect(screen.getByRole('button').textContent).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('prioriza el tema oscuro guardado sobre la preferencia del sistema', () => {
    localStorage.setItem('theme', 'dark');
    spyOn(window, 'matchMedia').and.returnValue({ matches: false } as MediaQueryList);

    render(<ThemeProbe />);

    expect(screen.getByRole('button').textContent).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('alterna entre tema claro y oscuro', () => {
    spyOn(window, 'matchMedia').and.returnValue({ matches: false } as MediaQueryList);

    render(<ThemeProbe />);

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button').textContent).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('button').textContent).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
