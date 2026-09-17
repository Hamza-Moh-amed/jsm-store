import {  DnaIcon, GpuIcon, PinIcon, } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col mt-5 py-7 px-2.5 text-[#324d67] font-bold gap-2.5 justify-center items-center">
      <p>2027 JSM Store All Rights Reserved</p>
      <p className="flex text-3xl gap-2.5">
        <PinIcon />
        <DnaIcon />
        <GpuIcon />
      </p>
    </div>
  );
};

export default Footer;