import Head from "next/head";
import Image from "next/image";
import { Navbar, Footer } from "../components";
import vega from "../public/vega-early.png";

const project = {
  title: "Vega",
  src: "https://upload.wikimedia.org/wikipedia/commons/4/42/Vega_star_black_background.png",
};

export default function Orion() {
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
          <h2 style={{ marginBottom: "5px" }}>What is project Vega?</h2>
          <p>
            Vega is a simple rendering engine written in C++ using OpenGL. The
            project isn&apos;t finished yet, so they code isn&apos;t open source
            and a lack of description may be present.
          </p>

          <h2 style={{ marginBottom: "5px" }}>About Vega</h2>
          <p>
            Vega was made using OpenGL, I originally wanted to use Vulkan due to
            it&apos;s performance and explicit syntax however it proved too
            steep of a learning curve for me, and I decided to learn OpenGL
            before Vulkan to better understand the rendering pipeline. I&apos;m
            currently writing and extending my knowledge of the rendering
            pipeline and OpenGL itself.
          </p>

          <Image
            src={vega}
            alt="Vega's early code"
            width={1874}
            height={929}
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
            <p style={{ fontSize: "0.7rem" }}>Vega&apos;s early code.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
