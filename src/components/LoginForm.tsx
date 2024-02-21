import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="flex flex-col w-full max-w-md items-center mx-auto my-52">
      <div className="text-2xl mb-4">Login</div>

      <input
        className="w-80 p-1 border-b-2 bg-transparent outline-none border-[#6A6A6A] text-white placeholder:text-[#6A6A6A] my-6 text-lg"
        type="text"
        placeholder="Login"
      />
      <input
        className="w-80 p-1 border-b-2 bg-transparent outline-none border-[#6A6A6A] text-white placeholder:text-[#6A6A6A] my-6 text-lg"
        type="text"
        placeholder="Password"
      />
      <button className="rounded-md bg-white text-black px-12 py-3 mb-10 mt-5">
        Login
      </button>
      <div className="flex">
        <div className="mr-1.5">Don't have an account?</div>
        <Link className="text-[#6B6B70]" to="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
