import Link from "next/link";

const NavBar = () => (
  <>
    <Link href="todoApp">
      <a>Todo App!</a>
    </Link>
    <Link href="calculator">
      <a>Calculator App!</a>
    </Link>
  </>
);

export default NavBar;