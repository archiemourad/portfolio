import Image from "next/image";
import Link from "next/link";

export default function Project(props: any) {
  return (
    <div
      style={{
        display: "inline-block",
        border: "1px solid black",
        margin: "20px",
      }}
    >
      <Image src={props.src} alt={props.title} width={300} height={200} />
      <div
        style={{
          position: "absolute",
          background: "white",
          border: "1px solid black",
          padding: "10px",
          marginTop: "-65px",
          marginLeft: "10px",
        }}
      >
        <h3 style={{ margin: "0" }}>{props.title}</h3>
      </div>

      <Link href={props.link}>
        <button
          style={{
            display: "block",
            paddingLeft: "90px",
            paddingRight: "90px",
            margin: "auto",
            marginBottom: "7.5px",
          }}
        >
          check it out
        </button>
      </Link>
    </div>
  );
}
