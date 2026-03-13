import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getAllProjects() {
  // Get file names under /content/projects
  const fileNames = fs.readdirSync(projectsDirectory);
  
  const allProjectsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id (the slug)
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data as { title: string; date: string; tags: string[] },
    };
  });

  // Sort projects by date
  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
export function getProjectData(id: string) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  

  console.log("Looking for file at:", fullPath);

  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  // Add this check!
  if (!fs.existsSync(fullPath)) {
    return null; 
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    id,
    content: matterResult.content,
    ...matterResult.data as { title: string; date: string; tags: string[] },
  };
}