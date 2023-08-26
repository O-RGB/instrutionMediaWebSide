import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
      <div className="flex flex-wrap justify-start sm:justify-center  gap-2 sm:gap-4 text-center  w-full h-auto bg-gray-600 p-4 text-white text-xs">
        <div>เว็บไซต์ สื่อการสอน Worksheets</div>
        <div>Email :learningworksheets@gmail.com</div>
        <div>Facebook Page : สื่อการสอน Worksheets</div>
      </div>
    </>
  );
};

export default Footer;
