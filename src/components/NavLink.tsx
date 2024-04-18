import { Link } from "react-router-dom";

interface NavlinkTypes {
  href: string;
  name: string;
}

export default function NavLink({ href, name }: NavlinkTypes) {
  return <Link to={href}>{name}</Link>;
}
