import Link from "next/link";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <Link href="/">home</Link>
      <Link href="/my-projects">my projects</Link>
      <Link href="/about-me">about me</Link>
    </div>
  );
}
