import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row pr-8 border-b">
      <Logo />
      <Navbar />
    </div>
  );
}
