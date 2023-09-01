import Link from "next/link";

function NavBar() {
  return (
    <nav>
      <Link href="/">
        <h1>NextGoogle</h1>
      </Link>
      <div>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

export default NavBar;
