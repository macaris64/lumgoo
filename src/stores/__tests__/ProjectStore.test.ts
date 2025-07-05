import { ProjectStore } from '../ProjectStore';

describe('ProjectStore', () => {
  let projectStore: ProjectStore;

  beforeEach(() => {
    projectStore = new ProjectStore();
  });

  it('should initialize with default values', () => {
    expect(projectStore.projects).toHaveLength(3);
    expect(projectStore.filter).toEqual({});
  });

  it('should filter projects correctly by category', () => {
    projectStore.setFilter({ category: 'fullstack' });
    expect(projectStore.filteredProjects).toHaveLength(1);
    expect(projectStore.filteredProjects[0].title).toBe('E-Commerce Platform');
  });

  it('should filter projects correctly by technology', () => {
    projectStore.setFilter({ technology: 'React' });
    expect(projectStore.filteredProjects).toHaveLength(3);
  });

  it('should filter projects by specific technology', () => {
    projectStore.setFilter({ technology: 'Firebase' });
    expect(projectStore.filteredProjects).toHaveLength(1);
    expect(projectStore.filteredProjects[0].title).toBe('Task Management App');
  });

  it('should return all projects when filter is empty', () => {
    projectStore.clearFilter();
    expect(projectStore.filteredProjects).toHaveLength(3);
  });

  it('should return featured projects', () => {
    const featuredProjects = projectStore.featuredProjects;
    expect(featuredProjects).toHaveLength(3);
    expect(featuredProjects.every(p => p.featured)).toBe(true);
  });

  it('should get project by id', () => {
    const project = projectStore.getProjectById('1');
    expect(project).toBeDefined();
    expect(project?.title).toBe('E-Commerce Platform');
  });

  it('should return undefined for non-existent project id', () => {
    const project = projectStore.getProjectById('999');
    expect(project).toBeUndefined();
  });

  it('should group projects by category', () => {
    const projectsByCategory = projectStore.projectsByCategory;
    expect(projectsByCategory).toHaveProperty('fullstack');
    expect(projectsByCategory).toHaveProperty('mobile');
    expect(projectsByCategory).toHaveProperty('web');
  });

  it('should filter projects by search term', () => {
    projectStore.setFilter({ search: 'task' });
    expect(projectStore.filteredProjects).toHaveLength(1);
    expect(projectStore.filteredProjects[0].title).toBe('Task Management App');
  });
}); 