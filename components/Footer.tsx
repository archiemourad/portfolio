import Link from "next/link";

export default function Footer() {
  return (
    <div className="nav-bar" style={{ padding: "20px" }}>
      <div style={{ display: "inline-block", margin: "20px" }}>
        <p style={{ fontWeight: "600" }}>Contact me:</p>
        email:
        <Link
          /* Link opens a new gmail message with mouradarchie@gmail.com entered */
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMFzlHJsHrDspkJcJnbzxVsxfKfGBpfqGJPzJqfTwlVnFsGrMxdCjhhljckJDBjqDsRVKj"
          style={{ margin: "5px" }}
        >
          mouradarchie@gmail.com
        </Link>
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
          archiemourad
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
          href="https://github.com/archiemourad/portfolio"
          style={{ margin: "5px" }}
        >
          Portfolio on Github
        </Link>
      </div>
    </div>
  );
}
