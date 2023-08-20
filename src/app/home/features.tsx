import Timeline from "./timeline";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";

const Features = () => {
  const { push } = useRouter();
  return (
    <div className="h-[260vh] bg-gradient-to-b from-[#87BCDE] to-white font-Poppins ">
      <div className=" m-auto w-[80%] pt-[8rem] text-center text-xl text-gray-700">
        &quot;Empower our planet&apos;s potential. Every small step you take
        towards our NGO projects resonates into a symphony of positive change
        for our environment and future generations.&quot;
      </div>
      <div className="pt-[9vh]">
        <Timeline />
      </div>
      <div className="h-[100vh] bg-white p-20">
        <h3 className="m-auto items-center justify-center  p-10 pb-10 text-center text-4xl font-bold text-gray-700">
          Getting Started
          <hr className=" mt-10 h-[3px] bg-amber-950" />
        </h3>
        <div className="ml-[10rem] mr-[10rem] flex h-[40vh] flex-row pt-[4.5rem]">
          <div
            className="m-auto h-[30vh] w-[20vw] cursor-pointer rounded-2xl bg-[#A2663E] drop-shadow-lg hover:bg-[#54433A]"
            onClick={() => {
              push("investorLogin");
            }}
          >
            <div className=" relative top-[35%] text-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="2.5rem"
                width="2.5rem"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path>
              </svg>
              <p className="pt-5 text-lg">Investors</p>
            </div>
          </div>
          <div
            className="m-auto h-[30vh] w-[20vw] cursor-pointer rounded-2xl bg-[#5CC94D] drop-shadow-lg hover:bg-[#408251]"
            onClick={() => {
              push("ngoLogin");
            }}
          >
            <div className=" relative top-[35%] text-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="2.5rem"
                width="2.5rem"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path d="M253.47 17.406C123.76 17.406 18.437 122.76 18.437 252.47c0 129.707 105.324 235.06 235.03 235.06 129.707 0 235.063-105.353 235.063-235.06 0-129.71-105.355-235.064-235.06-235.064zM367.874 68.75c61.246 38.19 101.97 106.14 101.97 183.72 0 17.143-1.993 33.823-5.75 49.81l-34.25-18.06 22 54.874c-9.454 21.647-22.362 41.432-38 58.687l-43.158-30.936-64.625 47.72-61.656 6.967-13.906-41.78-49.72 26.844-68.093-18.938 9.157 36.594c-28.41-21.793-51.23-50.466-66-83.563L81.25 304.47l32.25 17.124 59.22-9.875 2.843-40.908-37.344-1.718 4.905-17.844 30.78-25.313-25.093-15.625 67.22-38.593-45.345-29.657-66.625 40.187-49.437-15.28c13.812-32.14 35.21-60.22 61.906-82.064l-3.75 44.375 43.376-34.124 72 22.22-22.5-27.407L233 75.562l26.813 28.468 71 9.845-3.5-34.47 41.468 12.657-.905-23.312zm1.156 120.03L278 199.47l28.906 43.218 3.156 64.468L339.25 321l11.438-28.375 62.656 48.656L395.78 294l6.408-48.344-43.75-22.72 10.593-34.155zM221 192.438l-31.594 21.188 36.47 14.78 16.686-14.78L221 192.437zm22.188 144.688l18.687 52.594 19.78-42.564-38.467-10.03z"></path>
              </svg>
              <p className="pt-5 text-lg">NGO</p>
            </div>
          </div>
          <div
            className="m-auto h-[30vh] w-[20vw] cursor-pointer rounded-2xl bg-[#DD817E] drop-shadow-lg hover:bg-[#C45258]"
            onClick={() => {
              push("globalMarketplace");
            }}
          >
            <div className=" relative top-[35%] text-center">
              <ShoppingBag className="mx-auto  h-10 w-10" />
              <p className="pt-5 text-lg">Global Marketplace</p>
            </div>
          </div>
        </div>
        <div className="m-auto h-[2px] p-20 text-center text-gray-700">
          Join the EcoToken Revolution:
          <br /> Connecting People to Carbon-Positive Change!
        </div>
      </div>
    </div>
  );
};

export default Features;
