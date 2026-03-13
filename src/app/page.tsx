import { getAllProjects } from '@/lib/projects';
import Link from 'next/link';
import CopyEmail from '@/components/copyemail';

interface Project {
  id: string;
  title: string;
  date: string;
  tags: string[];
}

export default function Home() {
  const projects: Project[] = getAllProjects();

  return (
    <main className="max-w-4xl mx-auto p-10 font-mono">
      {/* --- CENTERED HEADER SECTION --- */}
      <header className="flex flex-col items-center mb-20">
        <h1 className="text-3xl font-bold text-white mb-6 tracking-tighter">
          projects_repository
        </h1>
        
        {/* SOCIAL LINKS */}
      <div className="flex items-center gap-6 text-xs tracking-widest text-gray-500 border-y border-gray-800/50 py-4 w-full justify-center">
        <a 
          href="https://github.com/wasport" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          GITHUB
        </a>
        <span className="text-gray-800">|</span>
        
        {/* Replace the old <a> with our new component */}
        <CopyEmail /> 
      </div>
      </header>

      {/* --- LOWERED PROJECTS GRID --- */}
      <div className="grid gap-6 mt-16">
        {projects.map((project: Project) => (
          <Link 
            key={project.id} 
            href={`/projects/${project.id}`}
            className="group block p-6 border border-gray-800 hover:border-blue-500/50 transition-all bg-[#0a0a0a] rounded-sm hover:translate-x-1"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold group-hover:text-blue-400 text-gray-100 transition-colors">
                {project.title}
              </h2>
              <span className="text-gray-500 text-sm tabular-nums">{project.date}</span>
            </div>
            
            <div className="mt-4 flex gap-2">
              {project.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className="text-[10px] uppercase tracking-wider bg-gray-900 border border-gray-800 px-2 py-1 rounded text-gray-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}