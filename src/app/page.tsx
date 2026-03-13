import { getAllProjects } from '@/lib/projects';
import Link from 'next/link';

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
      <h1 className="text-2xl font-bold mb-8 border-b border-gray-800 pb-2 text-white">
        ~/projects_repository
      </h1>
      
      <div className="grid gap-4">
        {projects.map((project: Project) => {
          // DEBUG: This will show up in your browser console (F12)
          console.log("Generating link for:", project.id);

          return (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="group block p-4 border border-gray-800 hover:border-blue-500 transition-all bg-[#0a0a0a]"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold group-hover:text-blue-400 text-gray-100">
                  {project.title}
                </h2>
                <span className="text-gray-500 text-sm">{project.date}</span>
              </div>
              <div className="mt-3 flex gap-2">
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
          );
        })}
      </div>
    </main>
  );
}