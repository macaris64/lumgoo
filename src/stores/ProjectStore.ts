import { makeAutoObservable } from 'mobx';
import { Project, ProjectFilter } from '@/types/Project';

export class ProjectStore {
  projects: Project[] = [];
  filter: ProjectFilter = {};
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.loadMockData();
  }

  get filteredProjects(): Project[] {
    let filtered = this.projects;

    if (this.filter.category) {
      filtered = filtered.filter(project => project.category === this.filter.category);
    }

    if (this.filter.technology) {
      filtered = filtered.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(this.filter.technology!.toLowerCase())
        )
      );
    }

    if (this.filter.status) {
      filtered = filtered.filter(project => project.status === this.filter.status);
    }

    if (this.filter.search) {
      const searchTerm = this.filter.search.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm)
      );
    }

    return filtered;
  }

  get featuredProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  get projectsByCategory(): Record<string, Project[]> {
    return this.projects.reduce((acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = [];
      }
      acc[project.category].push(project);
      return acc;
    }, {} as Record<string, Project[]>);
  }

  setFilter(filter: Partial<ProjectFilter>) {
    this.filter = { ...this.filter, ...filter };
  }

  clearFilter() {
    this.filter = {};
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  private loadMockData() {
    // Mock data for development
    this.projects = [
      {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'Full-stack e-commerce solution with React and Node.js',
        longDescription: 'A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
        imageUrl: '/images/project1.jpg',
        demoUrl: 'https://demo.example.com',
        githubUrl: 'https://github.com/example/ecommerce',
        featured: true,
        category: 'fullstack',
        status: 'completed',
        createdAt: '2023-01-01',
        updatedAt: '2023-03-01',
      },
      {
        id: '2',
        title: 'Task Management App',
        description: 'Mobile-first task management application with real-time sync',
        longDescription: 'A task management application that helps teams collaborate effectively. Built with React Native and Firebase for real-time synchronization across devices.',
        technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
        imageUrl: '/images/project2.jpg',
        demoUrl: 'https://demo2.example.com',
        githubUrl: 'https://github.com/example/task-app',
        featured: true,
        category: 'mobile',
        status: 'completed',
        createdAt: '2023-02-01',
        updatedAt: '2023-04-01',
      },
      {
        id: '3',
        title: 'Data Visualization Dashboard',
        description: 'Interactive dashboard for business analytics and reporting',
        longDescription: 'A comprehensive dashboard that transforms complex data into actionable insights. Features interactive charts, real-time updates, and customizable reporting.',
        technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
        imageUrl: '/images/project3.jpg',
        demoUrl: 'https://demo3.example.com',
        githubUrl: 'https://github.com/example/dashboard',
        featured: true,
        category: 'web',
        status: 'in-progress',
        createdAt: '2023-03-01',
        updatedAt: '2023-05-01',
      },
    ];
  }
} 