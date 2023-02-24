import Image from "next/image";
import animations from "../styles/animations.module.scss";

export default function Lang(props: any) {
  return (
    <div
      className={animations.inspect}
      style={{
        display: "inline-block",
        background: "rgb(51, 51, 51)",
        borderRadius: "5px",
        textAlign: "center",
        width: "110px",
        height: "175px",
        padding: "20px",
        margin: "10px",
      }}
    >
      <h4 style={{ margin: "0" }}>{props.title}</h4>
      <Image
        src={props.src}
        alt={props.alt}
        width={100}
        height={100}
        style={{
          borderRadius: "10px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <p
        style={{
          display: "inline-block",
          fontSize: "1.25rem",
          fontWeight: "600",
        }}
      >
        {props.score}
      </p>
      <p
        style={{
          display: "inline-block",
          fontSize: "0.75rem",
          verticalAlign: "top",
        }}
      >
        {props.modifier}
      </p>
    </div>
  );
}
