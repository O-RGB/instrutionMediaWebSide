import React from "react";

/* eslint-disable @next/next/no-img-element */
interface IHeader {
  //   imagePathList: any[];
}

const Header: React.FC<IHeader> = ({}) => {
  return (
    <>
      <div className="h-12 w-full bg-white shadow-md sticky top-0 z-50 ">
        <div className="flex m-auto w-ful h-full p-2 max-w-7xl px-3 sm:px-14 justify-between">
          <div className="flex ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/instructionmedia-30412.appspot.com/o/icon%2Flogo.svg?alt=media&token=9e1b541b-2c79-4330-90c1-263de5a89a7b"
              alt=""
              className="w-auto h-6 sm:h-7 m-auto "
            />
          </div>
          <div className="flex-none w-32 hidden lg:block">
            {/* <div>ijeif</div>
            <div>ijeif</div>
            <div>ijeif</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;