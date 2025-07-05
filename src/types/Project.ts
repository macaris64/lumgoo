export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'desktop' | 'fullstack';
  status: 'completed' | 'in-progress' | 'planned';
  createdAt: string;
  updatedAt: string;
}

export interface ProjectFilter {
  category?: string;
  technology?: string;
  status?: string;
  search?: string;
}

export interface ProjectStore {
  projects: Project[];
  filteredProjects: Project[];
  filter: ProjectFilter;
  loading: boolean;
  error: string | null;
} 