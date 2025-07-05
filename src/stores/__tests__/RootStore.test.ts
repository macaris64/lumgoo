import React, { ReactNode } from 'react';
import { RootStore, useStore, useProjectStore } from '../RootStore';
import { renderHook } from '@testing-library/react';
import { StoreProvider } from '../StoreProvider';

// Mock provider for testing hooks
const wrapper = ({ children }: { children: ReactNode }) => (
  React.createElement(StoreProvider, null, children)
);

describe('RootStore', () => {
  it('should create ProjectStore instance', () => {
    const rootStore = new RootStore();
    expect(rootStore.projectStore).toBeDefined();
  });

  it('should initialize with ProjectStore containing projects', () => {
    const rootStore = new RootStore();
    expect(rootStore.projectStore.projects).toHaveLength(3);
  });
});

describe('useStore hook', () => {
  it('should return store when within provider', () => {
    const { result } = renderHook(() => useStore(), { wrapper });
    expect(result.current).toBeInstanceOf(RootStore);
  });

  it('should throw error when used outside provider', () => {
    expect(() => {
      renderHook(() => useStore());
    }).toThrow('useStore must be used within a StoreProvider');
  });
});

describe('useProjectStore hook', () => {
  it('should return project store when within provider', () => {
    const { result } = renderHook(() => useProjectStore(), { wrapper });
    expect(result.current).toBeDefined();
    expect(result.current.projects).toHaveLength(3);
  });
}); 