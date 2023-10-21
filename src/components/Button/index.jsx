import React from "react";
import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";

const CustomButton = ({ title, onClick, filled }) => {
  return (
    <Button
      className={` ${filled ? 'bg-[#d4fbff] hover:bg-transparent' : 'bg-transparent hover:bg-[#d4fbff]'} border-1 border-[#d4fbff] rounded-md shadow-lg mt-4 text-[#16273d] w-[100%] sm:w-max hover:shadow-xl hover:scale-125`}
      endContent={<FaArrowRight size={20} className="p-1 bg-black/50 text-white rounded-full" />}
      onClick={onClick ? onClick : () => { }}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
