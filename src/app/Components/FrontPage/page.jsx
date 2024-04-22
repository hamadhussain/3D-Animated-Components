import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex w-screen items-center center my-44">
      <div className=" flex flex-col ">
        <h1 className="text-5xl uppercase">3D Animation By Three J.s</h1>
        <h3>Scroll Down to View Animations</h3>
      </div>
      <Image src="/Front/Funboy.jpg" width={100} height={100} />
    </div>
  );
};

export default page;
