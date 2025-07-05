import { render, screen } from '@testing-library/react';
import ProjectCard from '../common/ProjectCard';
import { Project } from '@/types/Project';

const mockProject: Project = {
  id: '1',
  title: 'Test Project',
  description: 'A test project description',
  longDescription: 'A longer description for testing',
  technologies: ['React', 'TypeScript', 'Jest'],
  imageUrl: '/images/test.jpg',
  demoUrl: 'https://demo.example.com',
  githubUrl: 'https://github.com/test/project',
  featured: true,
  category: 'web',
  status: 'completed',
  createdAt: '2023-01-01',
  updatedAt: '2023-02-01',
};

describe('ProjectCard', () => {
  it('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('A test project description')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Jest')).toBeInTheDocument();
  });

  it('renders project links', () => {
    render(<ProjectCard project={mockProject} />);
    
    const demoLink = screen.getByRole('link', { name: /demo/i });
    const codeLink = screen.getByRole('link', { name: /code/i });
    
    expect(demoLink).toHaveAttribute('href', 'https://demo.example.com');
    expect(codeLink).toHaveAttribute('href', 'https://github.com/test/project');
  });

  it('renders project image', () => {
    render(<ProjectCard project={mockProject} />);
    
    const projectImage = screen.getByAltText('Test Project');
    expect(projectImage).toBeInTheDocument();
    // Next.js optimizes images, so we check if the src contains the image path
    expect(projectImage).toHaveAttribute('src', expect.stringContaining('test.jpg'));
  });

  it('renders all project links correctly', () => {
    render(<ProjectCard project={mockProject} />);
    
    const allLinks = screen.getAllByRole('link');
    expect(allLinks).toHaveLength(2);
    
    expect(allLinks[0]).toHaveAttribute('href', 'https://demo.example.com');
    expect(allLinks[1]).toHaveAttribute('href', 'https://github.com/test/project');
  });
}); 