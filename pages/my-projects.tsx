import { Navbar, Footer, Project } from "../components";

const projects = [
  {
    title: "Orion",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/The_Great_Orion_Nebula_in_Narrowband.jpg",
    link: "/orion",
  },
  {
    title: "Vega",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/42/Vega_star_black_background.png",
    link: "/vega",
  },
];

export default function MyProjects() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "25px", marginTop: "50px" }}>
        <h1>Projects</h1>

        {projects.map((project, index) => (
          <Project
            key={project.title + "-" + index}
            title={project.title}
            src={project.src}
            link={project.link}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
