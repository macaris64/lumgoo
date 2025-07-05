import { createContext, useContext } from 'react';
import { ProjectStore } from './ProjectStore';

export class RootStore {
  projectStore: ProjectStore;

  constructor() {
    this.projectStore = new ProjectStore();
  }
}

export const StoreContext = createContext<RootStore | null>(null);

export const useStore = (): RootStore => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export const useProjectStore = () => {
  const { projectStore } = useStore();
  return projectStore;
}; 