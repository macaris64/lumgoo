import { render, screen } from '@testing-library/react';
import ProjectSlider from '../common/ProjectSlider';
import { StoreProvider } from '@/stores/StoreProvider';

// Mock Swiper components
jest.mock('swiper/react', () => ({
  Swiper: ({ children, ...props }: any) => (
    <div data-testid="swiper" {...props}>
      {children}
    </div>
  ),
  SwiperSlide: ({ children, ...props }: any) => (
    <div data-testid="swiper-slide" {...props}>
      {children}
    </div>
  ),
}));

// Mock Swiper modules
jest.mock('swiper/modules', () => ({
  Navigation: {},
  Pagination: {},
  Autoplay: {},
}));

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <StoreProvider>
      {component}
    </StoreProvider>
  );
};

describe('ProjectSlider', () => {
  it('renders without crashing', () => {
    renderWithProvider(<ProjectSlider />);
  });

  it('displays project titles', () => {
    renderWithProvider(<ProjectSlider />);
    
    // Check for project titles
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Task Management App')).toBeInTheDocument();
    expect(screen.getByText('Data Visualization Dashboard')).toBeInTheDocument();
  });

  it('displays project information correctly', () => {
    renderWithProvider(<ProjectSlider />);
    
    // Check for project descriptions - match actual content
    expect(screen.getByText(/Full-stack e-commerce solution with React and Node.js/i)).toBeInTheDocument();
    expect(screen.getByText(/Interactive dashboard for business analytics and reporting/i)).toBeInTheDocument();
  });

  it('renders project technologies', () => {
    renderWithProvider(<ProjectSlider />);
    
    // Check for technology tags
    expect(screen.getAllByText('React')).toHaveLength(2);
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
  });

  it('renders project links', () => {
    renderWithProvider(<ProjectSlider />);
    
    // Check for demo and code links
    const demoLinks = screen.getAllByText('Demo');
    const codeLinks = screen.getAllByText('Code');
    
    expect(demoLinks.length).toBeGreaterThan(0);
    expect(codeLinks.length).toBeGreaterThan(0);
  });
}); 