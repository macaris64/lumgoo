import { render, screen } from '@testing-library/react';
import Home from '../page';
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

describe('Home Page', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Home />);
  });

  it('renders hero section', () => {
    renderWithProvider(<Home />);
    
    // Check for main heading - actual text is "Welcome to Lumgoo"
    expect(screen.getByText(/Welcome to Lumgoo/i)).toBeInTheDocument();
  });

  it('renders featured projects section', () => {
    renderWithProvider(<Home />);
    
    // Check for featured projects heading
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();
  });

  it('contains project slider', () => {
    renderWithProvider(<Home />);
    
    // Check for swiper component
    expect(screen.getByTestId('swiper')).toBeInTheDocument();
  });
}); 