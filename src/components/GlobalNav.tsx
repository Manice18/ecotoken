"use client";
import { useRouter } from "next/navigation";
import React from "react";

function GlobalNav() {
  const { push } = useRouter();
  return (
    <header className="sticky top-0 z-50 items-center bg-[#202023] px-10 py-7 font-Poppins text-2xl font-bold transition-all md:grid md:grid-cols-3 xl:px-10">
      <div
        className="cursor-pointer text-3xl font-semibold text-[#54b946]"
        onClick={() => push("/")}
      >
        EcoToken
      </div>
    </header>
  );
}

export default GlobalNav;
