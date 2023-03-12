import Head from "next/head";
import { Navbar, Footer, Project } from "../components";

const projects = [
  {
    title: "Orion",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/The_Great_Orion_Nebula_in_Narrowband.jpg",
    link: "/orion",
  },
];

export default function MyProjects() {
  return (
    <>
      <Head>
        <title>Portfolio - My Projects</title>
        <meta
          name="Portfolio - My Projects"
          content="Browse my projects on Archie Mourad's portfolio."
        />
      </Head>
      <Navbar />
      <div style={{ minHeight: "100vh", padding: "5vw" }}>
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
