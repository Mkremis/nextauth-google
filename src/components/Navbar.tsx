/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

function NavBar() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <nav className="bg-slate-900 flex justify-between  items-center px-24 py-5 text-white">
      <Link href="/">
        <h1>NextGoogle</h1>
      </Link>
      {session?.user ? (
        <div className="flex gap-x-2 items-center">
          <Link href="/dashboard">Dashboard</Link>
          <p>
            {session.user.name} {session.user.email}
          </p>
          <img
            src={session.user.image}
            className="rounded-full w-10 h-10 cursor-pointer"
          />
          <button
            onClick={async () =>
              await signOut({
                callbackUrl: "/",
              })
            }
            className="bg-sky-400 px-3 py-2 rounded"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex gap-x-2 items-center">
          <button
            onClick={async () => await signIn()}
            className="bg-sky-400 px-3 py-2 rounded"
          >
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
