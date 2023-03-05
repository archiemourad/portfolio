import Head from "next/head";
import Link from "next/link";
import { Navbar, Footer } from "../components";

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta
          name="404 - Page Not Found"
          content="The 404 page for Archie Mourad's portfolio."
        />
      </Head>
      <Navbar />
      <div style={{ margin: "15vw" }}>
        <h1 style={{ fontSize: "7rem" }}>404</h1>
        {/* Replaced apostrophes with &apos; due to wierd compilation errors during deployment */}
        <p>Whoops! The page you were looking for couldn&apos;t be found.</p>
        <Link href="/">
          <button style={{ marginTop: "25px" }}>return home</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
