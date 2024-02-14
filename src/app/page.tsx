import Image from "next/image";
import { dancing } from "./fonts";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-18 bg-[#F1ACB1] gap-2 relative">
      <div className="text-3xl md:text-[4rem]  font-extralight text-white  font whitespace-normal flex flex-col gap-4 md:gap-6 leading-none items-center ">
        <div className="border-b py-4 px-20 md:px-32">14 FEB</div>
        <span className={"italic  " + dancing.className}>
          Sarahi will you be my
        </span>
        <span className="uppercase text-5xl md:text-[6rem] font-medium tracking-wider">
          valentine?
        </span>
      </div>
      <div className=" font-extralight text-white  font whitespace-normal flex flex-col gap-8 leading-none "></div>
      <img
        src="hearts.png"
        alt=""
        className="w-[20rem] h-[20rem] md:w-[38rem] md:h-[38rem]"
      />
    </div>
  );
}
