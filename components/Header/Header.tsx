import React from "react";

/* eslint-disable @next/next/no-img-element */
interface IHeader {
//   imagePathList: any[];
}

const Header: React.FC<IHeader> = ({  }) => {
  return (
    <>
      <div className="h-20 w-full bg-white shadow-md sticky top-0"></div>
    </>
  );
};

export default Header;
