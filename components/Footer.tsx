import Link from "next/link";

export default function Footer() {
  return (
    <div className="nav-bar" style={{ padding: "20px" }}>
      <div style={{ display: "inline-block", margin: "20px" }}>
        <p style={{ fontWeight: "600" }}>Contact me:</p>
        email: mouradarchie@gmail.com
        <br />
        phone: 0466 825 551
      </div>

      <div
        style={{
          display: "inline-block",
          margin: "20px",
          verticalAlign: "top",
        }}
      >
        <p style={{ fontWeight: "600" }}>Socials:</p>
        github:
        <Link href="https://github.com/archiemourad" style={{ margin: "5px" }}>
          https://github.com/archiemourad
        </Link>
      </div>

      <div
        style={{
          display: "inline-block",
          margin: "20px",
          verticalAlign: "top",
        }}
      >
        <p style={{ fontWeight: "600" }}>Source:</p>
        This page is open source.
        <br />
        Source:
        <Link
          href="https://github.com/archiemourad/archiemourad.github.io"
          style={{ margin: "5px" }}
        >
          https://github.com/archiemourad/archiemourad.github.io
        </Link>
      </div>
    </div>
  );
}
