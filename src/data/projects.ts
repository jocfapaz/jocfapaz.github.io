export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "veterinaria-san-marcos",
    title: "Veterinaria San Marcos",
    description: "Sitio web para clínica veterinaria con secciones informativas y servicios.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://jocfapaz.github.io/Veterinaria_San_Marcos.github.io/"
  }
];
