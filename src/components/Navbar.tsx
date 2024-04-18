import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="flex gap-4">
      <NavLink href="/" name="Home" />
      <NavLink href="/about" name="About" />
      <NavLink href="/blog" name="Blog" />
      <NavLink href="/gallery" name="Gallery" />
      <NavLink href="/contact" name="Contact" />
    </nav>
  );
}
