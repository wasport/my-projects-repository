import { getProjectData } from '@/lib/projects';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown'; // Import the renderer

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectData(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-10 font-mono text-gray-200">
      <header className="mb-8 border-b border-gray-800 pb-4">
        <h1 className="text-4xl font-bold text-white">{project.title}</h1>
        <p className="text-gray-500 mt-2">{project.date}</p>
      </header>

      {/* This component transforms ### into real headers */}
      <article className="prose prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h3: ({...props}) => <h3 className="text-xl font-bold text-blue-400 mt-6 mb-2" {...props} />,
            p: ({...props}) => <p className="leading-relaxed mb-4" {...props} />,
          }}
        >
          {project.content}
        </ReactMarkdown>
      </article>
      
      <footer className="mt-12 pt-8 border-t border-gray-800">
        <a href="/" className="text-blue-500 hover:text-blue-400 transition-colors">
          ← Back to repository
        </a>
      </footer>
    </main>
  );
}