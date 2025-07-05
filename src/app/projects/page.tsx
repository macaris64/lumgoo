'use client';

import { observer } from 'mobx-react-lite';
import { useProjectStore } from '@/stores';
import ProjectCard from '@/components/common/ProjectCard';

const ProjectsPage = observer(() => {
  const projectStore = useProjectStore();

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing various technologies and solutions.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => projectStore.clearFilter()}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                Object.keys(projectStore.filter).length === 0
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Projects
            </button>
            {['web', 'mobile', 'fullstack', 'desktop'].map((category) => (
              <button
                key={category}
                onClick={() => projectStore.setFilter({ category })}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  projectStore.filter.category === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectStore.filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projectStore.filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
});

ProjectsPage.displayName = 'ProjectsPage';

export default ProjectsPage; 