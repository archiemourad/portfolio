import Head from "next/head";
import Image from "next/image";
import { Navbar, Footer } from "../components";
import coast from "../public/coast.png";

const project = {
  title: "xp",
  src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Windows_XP_SP2_Boot_screen.png",
};

export default function Xp() {
  return (
    <>
      <Head>
        <title>Portfolio - {project.title}</title>
        <meta
          name={`Portfolio - ${project.title}`}
          content={`The about page for project ${project.title}.`}
        />
      </Head>
      <Navbar />
      <div style={{ padding: "20px", marginTop: "50px" }}>
        <Image
          src={project.src}
          alt={project.title}
          width={1000}
          height={1000}
          style={{
            display: "block",
            objectFit: "cover",
            width: "90vw",
            height: "200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <div
          style={{
            position: "absolute",
            background: "white",
            border: "1px solid black",
            padding: "10px",
            marginTop: "-65px",
            marginLeft: "5vw",
          }}
        >
          <h3 style={{ margin: "0" }}>{project.title}</h3>
        </div>

        <div style={{ padding: "5vw", paddingTop: "20px" }}>
          {/* Replaced apostrophes with &apos; due to wierd compilation errors during deployment */}
          <h2 style={{ marginBottom: "5px" }}>What is xp?</h2>
          <p>
            A repository containing numerous miniature projects that are purely
            a demonstration of knowledge and understanding.
          </p>

          <h2 style={{ marginBottom: "5px" }}>About xp</h2>
          <p>
            xp mainly contains projects written in C++, as that&apos;s the
            language I strive to become an expert at. Each of the individual
            mini-projects contain a snippet of my understanding of particular
            libraries and concepts. For example in the image below is the COAST
            project, a stress tester (not really) that utilizes threads and
            complex math equations.
          </p>

          <Image
            src={coast}
            alt="COAST: A mini-project inside the xp repository."
            width={1920}
            height={1080}
            style={{
              display: "block",
              borderRadius: "4px",
              width: "75vw",
              height: "40vw",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
          <div
            style={{
              position: "absolute",
              background: "white",
              border: "1px solid black",
              padding: "10px",
              marginTop: "-75px",
              marginLeft: "7vw",
            }}
          >
            <p style={{ fontSize: "0.7rem" }}>
              COAST: A mini-project inside the xp repository.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
