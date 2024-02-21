import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="px-10 py-5 flex justify-between mx-auto">
      <Link className="text-xl" to="/">
        CoinHub
      </Link>
      <Link className="text-lg" to="/login">
        Login
      </Link>
    </div>
  );
}
