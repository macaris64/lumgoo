export default function AboutPage() {
  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
    'MongoDB', 'PostgreSQL', 'Python', 'Django', 'Docker', 'AWS'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-gray-600 text-lg">
              Get to know more about my background, skills, and experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Background</h2>
              <p className="text-gray-700 mb-4">
                I'm a passionate full-stack developer with over 5 years of experience 
                in building modern web applications. I love creating solutions that 
                make a real difference in people's lives.
              </p>
              <p className="text-gray-700 mb-4">
                My journey in software development started with a curiosity about 
                how things work on the web. Over the years, I've developed expertise 
                in various technologies and frameworks, always staying up-to-date 
                with the latest industry trends.
              </p>
              <p className="text-gray-700">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="font-semibold text-lg">Senior Full-Stack Developer</h3>
                  <p className="text-primary-600 font-medium">Tech Company • 2021 - Present</p>
                  <p className="text-gray-700 mt-2">
                    Leading development of scalable web applications using React, Node.js, 
                    and cloud technologies. Mentoring junior developers and architecting 
                    solutions for complex business requirements.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="font-semibold text-lg">Full-Stack Developer</h3>
                  <p className="text-primary-600 font-medium">Startup Inc. • 2019 - 2021</p>
                  <p className="text-gray-700 mt-2">
                    Developed and maintained multiple web applications from concept to 
                    deployment. Collaborated with cross-functional teams to deliver 
                    high-quality software solutions.
                  </p>
                </div>
                
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="font-semibold text-lg">Frontend Developer</h3>
                  <p className="text-primary-600 font-medium">Web Agency • 2018 - 2019</p>
                  <p className="text-gray-700 mt-2">
                    Specialized in creating responsive and interactive user interfaces 
                    using modern JavaScript frameworks and CSS preprocessors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Technologies & Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologies.map((tech) => (
                <div key={tech} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <span className="font-medium text-gray-800">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
            <p className="text-gray-700 mb-6">
              I'm always interested in discussing new opportunities and interesting projects.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:contact@lumgoo.com" className="btn-primary">
                Send Email
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 