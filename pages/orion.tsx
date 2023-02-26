import Head from "next/head";
import Image from "next/image";
import { Navbar, Footer } from "../components";
import github from "../public/github.png";

const project = {
  title: "Orion",
  src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/The_Great_Orion_Nebula_in_Narrowband.jpg",
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
          <h2 style={{ marginBottom: "5px" }}>What is project Orion?</h2>
          <p>
            Orion is the website you're on right now. I personally like to name
            projects around the name of various stars, that&apos;s why they all
            have such wierd names.
          </p>

          <h2 style={{ marginBottom: "5px" }}>About Orion</h2>
          <p>
            Orion was made using Next.js 13 and typescript for optimal
            performance. I like to make all my projects compatible with all
            devices, so pages have been thoroughly tested on mobile as well as
            desktop. It's also in my intrest to keep my projects open source and
            open to feedback. That&apos;s why my projects are public on GitHub
            and can be visited with the source link at the bottom of this page.
          </p>

          <Image
            src={github}
            alt="GitHub source"
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
            <p style={{ fontSize: "0.7rem" }}>Orion on GitHub</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
