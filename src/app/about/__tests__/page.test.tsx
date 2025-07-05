import { render, screen } from '@testing-library/react';
import About from '../page';

describe('About Page', () => {
  it('renders without crashing', () => {
    render(<About />);
  });

  it('renders main heading', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
  });

  it('renders profile description', () => {
    render(<About />);
    expect(screen.getByText(/passionate full-stack developer/i)).toBeInTheDocument();
  });

  it('renders experience heading', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /Experience/i })).toBeInTheDocument();
  });

  it('renders technologies heading', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /Technologies & Skills/i })).toBeInTheDocument();
  });

  it('displays various technologies', () => {
    const { container } = render(<About />);
    
    // Use container to get all text content
    const allText = container.textContent || '';
    
    expect(allText).toMatch(/JavaScript/);
    expect(allText).toMatch(/React/);
    expect(allText).toMatch(/Node\.js/);
  });

  it('shows contact information', () => {
    render(<About />);
    expect(screen.getByText(/Let's Connect/i)).toBeInTheDocument();
  });
}); 