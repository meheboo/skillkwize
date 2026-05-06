import Image from "next/image";
import { FileSearch, Play, Target, UsersRound } from "lucide-react";

export default function LoginSection() {
  return (
    <section className="bg-[#000c2a] py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-xl md:flex-row">
          <div className="relative w-full bg-[#f8fbff] p-8 md:w-1/2">
            <div className="relative mb-6 h-56 overflow-hidden rounded-lg">
              <Image
                src="/images/login-section.png"
                alt="SkillKwiz secure login"
                fill
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-5 text-center">
              <Target className="mx-auto h-12 w-12 text-[#f73c5c]" />
              <FileSearch className="mx-auto h-12 w-12 text-[#2a8bea]" />
              <UsersRound className="mx-auto h-12 w-12 text-[#48caed]" />
              <Play className="mx-auto h-12 w-12 text-[#ff9d00]" />
            </div>
          </div>

          <div className="flex w-full items-center bg-[#00418d] p-8 md:w-1/2">
            <div className="w-full">
              <h2 className="mb-6 text-xl font-bold text-white">
                Sign in to SkillKwiz
              </h2>

              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md bg-gray-200 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#48caed]"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-md bg-gray-200 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#48caed]"
                />

                <div className="flex items-center justify-between gap-4 text-sm">
                  <label className="flex items-center text-white">
                    <input type="checkbox" className="mr-2 h-4 w-4" />
                    Remember me
                  </label>
                  <a href="#" className="text-white hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-[#f73c5c] p-3 font-medium text-white transition-all hover:bg-opacity-90"
                >
                  Sign In
                </button>

                <p className="text-center text-white">
                  New to SkillKwiz?{" "}
                  <a href="/services" className="font-medium underline">
                    Sign Up
                  </a>
                </p>

                <div className="text-center text-white">
                  <p className="mb-2">- Or Login with -</p>
                  <div className="flex justify-center space-x-4">
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#DB4437]">
                      G
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                      A
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
