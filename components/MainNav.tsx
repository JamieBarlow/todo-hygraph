"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import Link from "next/link";

const MainNav = () => {
  const { data: session } = useSession();
  return (
    <nav className="flex items-center w-full p-2">
      <Button size="lg">
        <Link href="/">Home Page</Link>
      </Button>
      <div className="ml-auto flex gap-2">
        {session ? (
          <Button size="lg" onClick={() => signOut({ callbackUrl: "/login" })}>
            Logout
          </Button>
        ) : (
          <>
            <Button size="lg">
              <Link href="/login">Login</Link>
            </Button>
            <Button size="lg">
              <Link href="/register">Register</Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
