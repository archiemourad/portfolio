import Image from "next/image";
import { Navbar, Footer } from "../components";

const project = {
  title: "Orion",
  src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/The_Great_Orion_Nebula_in_Narrowband.jpg",
};

export default function Orion() {
  return (
    <>
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
      </div>

      <Footer />
    </>
  );
}
