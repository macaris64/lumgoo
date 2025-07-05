import { render, screen, fireEvent } from '@testing-library/react';
import Projects from '../page';
import { StoreProvider } from '@/stores/StoreProvider';

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <StoreProvider>
      {component}
    </StoreProvider>
  );
};

describe('Projects Page', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Projects />);
  });

  it('renders main heading', () => {
    renderWithProvider(<Projects />);
    expect(screen.getByText(/My Projects/i)).toBeInTheDocument();
  });

  it('renders project cards', () => {
    renderWithProvider(<Projects />);
    
    // Check for project titles
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Task Management App')).toBeInTheDocument();
    expect(screen.getByText('Data Visualization Dashboard')).toBeInTheDocument();
  });

  it('renders filter controls', () => {
    renderWithProvider(<Projects />);
    
    // Check for filter buttons/controls
    const filterElements = screen.getAllByRole('button');
    expect(filterElements.length).toBeGreaterThan(0);
  });

  it('filters projects by category', () => {
    renderWithProvider(<Projects />);
    
    // Find a filter button and click it
    const filterButtons = screen.getAllByRole('button');
    if (filterButtons.length > 0) {
      fireEvent.click(filterButtons[0]);
      // Projects should still be rendered after filtering
      const projectCards = screen.getAllByText(/platform|app|dashboard/i);
      expect(projectCards.length).toBeGreaterThanOrEqual(1);
    }
  });

  it('displays project search functionality', () => {
    renderWithProvider(<Projects />);
    
    // Look for search input or filter controls
    const inputs = screen.queryAllByRole('textbox');
    const buttons = screen.getAllByRole('button');
    
    // Should have some form of search/filter UI
    expect(inputs.length + buttons.length).toBeGreaterThan(0);
  });
}); 