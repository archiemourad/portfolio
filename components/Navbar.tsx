import Image from "next/image";
import Link from "next/link";
import favicon from "../public/favicon.ico";

export default function Navbar() {
  return (
    <div className="nav-bar sticky">
      <Image
        src={favicon}
        alt=""
        width={16}
        height={16}
        style={{ display: "inline-block" }}
      />

      <Link href="/">home</Link>
      <Link href="/my-projects">my projects</Link>
      <Link href="/about-me">about me</Link>
    </div>
  );
}
