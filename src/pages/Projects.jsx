import ProjectCard from "../component/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Website SIEKSKUL SMK Pusdikhubad",
    desc: "Aplikasi Pendaftaran Eskul SMK Pusdikhubad .",
    image: "/image/t.1.jpeg",
    tech: ["React", "React Router", "CSS"],
    githubUrl: "https://github.com/username/portofolio-react",
    demoUrl: "https://portofolio-saya.vercel.app",
  },
  {
    id: 2,
    title: "Aplikasi jadwal kelas xi rpl",
    desc: "Aplikasi jadwal xi rpl.",
    image: "/image/t.2.jpeg",
    tech: ["React", "useState", "localStorage"],
    githubUrl: "https://github.com/username/catatan-app",
    demoUrl: "https://catatan-app-demo.vercel.app",
  },
  // tambahkan proyek lain di sini mengikuti pola yang sama
];

function Projects() {
  return (
    <section className="projects">
      <h2>Proyek Saya</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;