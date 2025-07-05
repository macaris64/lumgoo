import { render, screen } from '@testing-library/react';
import Footer from '../layout/Footer';

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 Lumgoo/i)).toBeInTheDocument();
  });

  it('renders all rights reserved text', () => {
    render(<Footer />);
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    
    // Check for social media links - these might be icons, so we'll check by href
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('renders with proper footer structure', () => {
    const { container } = render(<Footer />);
    
    // Check for footer element
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('contains links with proper attributes', () => {
    render(<Footer />);
    
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('href');
      // External links (http/https) should have target="_blank", but not mailto links
      const href = link.getAttribute('href');
      if (href && href.startsWith('http')) {
        expect(link).toHaveAttribute('target', '_blank');
      }
      // mailto links should NOT have target="_blank"
      if (href && href.startsWith('mailto')) {
        expect(link).not.toHaveAttribute('target');
      }
    });
  });
}); 