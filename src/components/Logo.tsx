import { Camera } from "react-feather";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <div className="flex gap-2 p-4 items-center justify-center">
        <Camera size={45} />
        <span className="uppercase text-2xl font-semibold">PhotoWeb</span>
      </div>
    </Link>
  );
}
