import React, { useRef } from "react";
import Image from "next/image";
import { useRefi } from "@/hooks/useRefi";

function Cards({ name, desc }: { name: any; desc: any }) {
  const inputRef = useRef<any>(null);
  const { sendSol } = useRefi({ typeOfAccount: "INVESTOR" });
  const handleClick = async () => {
    if (inputRef.current !== null) {
      sendSol({
        to: "9aYZU8Ed6cfHbqQNHXtjXLqPsLq1p9ft7Wv6n3vYHZFN",
        amount: inputRef.current.value,
      });
    }
  };
  return (
    <>
      <div className="h-full w-full max-w-sm overflow-hidden rounded-lg bg-[#202123] shadow-lg">
        <div className="relative h-0 w-full" style={{ paddingBottom: "42%" }}>
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src="https://via.placeholder.com/400x300" // Replace with your image URL
            alt="Card Image"
            width={400}
            height={300}
          />
        </div>
        <div className="px-5 py-4">
          <div className="mb-2 text-xl font-bold text-white">{name}</div>
          <p className="text-base text-white">{desc}</p>
        </div>
        <div className="flex flex-col items-start justify-between px-5">
          <input
            type="number"
            className="h-8 w-1/2 overflow-hidden text-black"
            defaultValue={0}
            ref={inputRef}
          />
          <button
            className="mt-2  justify-center rounded-lg bg-[#54b946] p-2 font-Poppins text-white"
            onClick={() => handleClick()}
          >
            Give Support
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
