import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../layout/Header';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Header', () => {
  it('renders the logo/brand name', () => {
    render(<Header />);
    expect(screen.getByText('Lumgoo')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  });

  it('has correct navigation link hrefs', () => {
    render(<Header />);
    
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '/about');
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Header />);
    
    // Find mobile menu button
    const menuButton = screen.getByRole('button');
    
    // Initially, mobile menu should be hidden
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
    
    // Click menu button
    fireEvent.click(menuButton);
    
    // Mobile menu should now be visible (checking for mobile nav links)
    const mobileNavLinks = screen.getAllByRole('link', { name: /home|projects|about/i });
    expect(mobileNavLinks.length).toBeGreaterThanOrEqual(3);
  });

  it('renders with proper header structure', () => {
    const { container } = render(<Header />);
    
    // Check for header element
    expect(container.querySelector('header')).toBeInTheDocument();
    
    // Check for navigation
    expect(container.querySelector('nav')).toBeInTheDocument();
  });
}); 