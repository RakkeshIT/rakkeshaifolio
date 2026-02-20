export interface ProjectProps {
  id: number;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  links: {
    live: string;
    gitHubCode: {server: string, client: string};
  };
  preview: {
    image: string;
    video: string | null;
  };
  overview: {
    problem: string;
    solution: string;
    goal: string;
  };
  projectInfo: {
    role: string;
    duration: string;
    type: string;
    status: string;
  };
  features: string[];
  architecture: {
    description: string;
    flow: string[];
  };
  challenges: {
    problem: string;
    solution: string;
  }[];
  results: {
    metrics: string[];
  };
  futureImprovements: string[];
}

// If your JSON is an array:
export type ProjectsArray = ProjectProps[];
