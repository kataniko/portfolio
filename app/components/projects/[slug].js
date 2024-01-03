
import { useRouter } from "next/router";


const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the project based on the slug
  const project = project.find((p) => p.title.toLowerCase() === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      {/* Add more details or components to display specific project information */}
      <img src={project.src} alt={project.title} />
      {/* Add more project details here */}
    </div>
  );
};

export default ProjectPage;
