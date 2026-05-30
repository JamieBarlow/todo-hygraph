import { Button } from "./ui/button";

import Link from "next/link";

const MainNav = () => {
  return (
    <nav className="flex items-center w-full p-2">
      <Button size="lg">
        <Link href="/">Home Page</Link>
      </Button>
      <div className="ml-auto flex gap-2">
        <Button size="lg">
          <Link href="/login">Login</Link>
        </Button>
        <Button size="lg">
          <Link href="/register">Register</Link>
        </Button>
      </div>
    </nav>
  );
};

export default MainNav;
