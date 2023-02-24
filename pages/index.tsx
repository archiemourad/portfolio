import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import animations from "../styles/animations.module.scss";
import { Navbar, Footer, Lang } from "../components";
import portrait from "../public/portrait.png";

const langs = [
  {
    title: "Favourite",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    alt: "C++",
    score: "4",
    modifier: "↑",
  },
  {
    title: "Known",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    alt: "TypeScript",
    score: "4",
    modifier: "↓",
  },
  {
    title: "⠀",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript",
    score: "4",
    modifier: "↓",
  },
  {
    title: "⠀",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    alt: "Python",
    score: "3",
    modifier: "↑",
  },
  {
    title: "⠀",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
    alt: "C#",
    score: "2",
    modifier: "↓",
  },
  {
    title: "⠀",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    alt: "HTML5",
    score: "4",
    modifier: "↓",
  },
  {
    title: "⠀",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    alt: "CSS3",
    score: "5",
    modifier: "↓",
  },
  {
    title: "⠀",
    src: "https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1608/0f93b179-76bf-4ee7-a838-e8222fbef062.png",
    alt: "Prisma",
    score: "2",
    modifier: "↓",
  },
  /* Cards with no title have been replaced with an invisible / empty unicode character due to css issues */
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Home</title>
        <meta
          name="Portfolio - Home"
          content="The home page for Archie Mourad's portfolio."
        />
      </Head>
      <Navbar />
      {/* <div className="overflow"> prevents content from overflowing on mobile, the body tag ignores the argument on such devices */}
      <div className="overflow">
        <div
          style={{ padding: "10vw", paddingBottom: "0", marginTop: "100px" }}
        >
          <div style={{ display: "inline-block", verticalAlign: "top" }}>
            <h1 className={animations.float}>Hey,</h1>
            <p className={animations.float_delayed}>
              {/* Replaced apostrophes with &apos; due to wierd compilation errors during deployment */}
              My name&apos;s Archie, a 14 year-old developer from Australia.
            </p>
          </div>

          <Image
            src={portrait}
            alt="Portrait"
            width={510}
            height={600}
            style={{
              display: "inline-block",
              /* verticalAlign: "bottom" removes an unwanted white space from the bottom of the image */
              verticalAlign: "bottom",
              right: "0",
            }}
          />

          <div
            className={animations.bob}
            style={{
              position: "absolute",
              fontSize: "3rem",
              top: "550px",
            }}
          >
            ↓
          </div>
        </div>

        <div style={{ background: "black", color: "white", padding: "20px" }}>
          <h2 style={{ fontSize: "2rem", margin: "0" }}>Languages</h2>
          <p style={{ maxWidth: "73ch", marginBottom: "20px" }}>
            All known languages and their respective scores (out of ten) and
            modifiers (↑ Rising intrest) (↓ Falling intrest) based on how well I
            think I know them.
          </p>

          {langs.map((lang, index) => (
            <Lang
              key={lang.title + "-" + index}
              title={lang.title}
              src={lang.src}
              alt={lang.alt}
              score={lang.score}
              modifier={lang.modifier}
            />
          ))}

          <p style={{ fontSize: "0.65rem", marginTop: "10px" }}>
            Image credit:{" "}
            <Link href="https://commons.wikimedia.org/wiki/Main_Page">
              Wikimedia Commons
            </Link>
          </p>
        </div>

        <div style={{ padding: "20px" }}>
          <Link className="nav-footer" href="/my-projects">
            See my projects {">"}
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
