import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="">
      <Image src="/logo.svg" alt="logo" width={36} height={36} />
    </nav>
  );
};
