import { render, screen } from '@testing-library/react';
import { StoreProvider } from '../StoreProvider';
import { useStore } from '../RootStore';

// Test component that uses the store
const TestComponent = () => {
  const store = useStore();
  return (
    <div>
      <span data-testid="store-available">Store Available</span>
      <span data-testid="project-count">{store.projectStore.projects.length}</span>
    </div>
  );
};

describe('StoreProvider', () => {
  it('provides store context to children', () => {
    render(
      <StoreProvider>
        <TestComponent />
      </StoreProvider>
    );
    
    expect(screen.getByTestId('store-available')).toBeInTheDocument();
    expect(screen.getByTestId('project-count')).toHaveTextContent('3');
  });

  it('renders children correctly', () => {
    render(
      <StoreProvider>
        <div data-testid="test-child">Test Child</div>
      </StoreProvider>
    );
    
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });

  it('provides the same store instance to multiple consumers', () => {
    const Consumer1 = () => {
      const store = useStore();
      return <span data-testid="consumer-1">{store.projectStore.projects.length}</span>;
    };
    
    const Consumer2 = () => {
      const store = useStore();
      return <span data-testid="consumer-2">{store.projectStore.projects.length}</span>;
    };
    
    render(
      <StoreProvider>
        <Consumer1 />
        <Consumer2 />
      </StoreProvider>
    );
    
    expect(screen.getByTestId('consumer-1')).toHaveTextContent('3');
    expect(screen.getByTestId('consumer-2')).toHaveTextContent('3');
  });
}); 