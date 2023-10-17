import React from "react";
import OImgae from "../../image/OImage";

/* eslint-disable @next/next/no-img-element */
interface IExmple {
  imagePathList: string;
  colorTheme?: string;
  content: string;
  contentDetail: string;
  number: string;
}

const Exmple: React.FC<IExmple> = ({
  imagePathList,
  colorTheme,
  content,
  contentDetail,
  number,
}) => {
  colorTheme = colorTheme ?? "bg-gray-500";
  return (
    <>
      <div className="py-1 sticky md:relative top-14 md:top-0 -mx-3 sm:-mx-0  bg-white border-b z-20">
        <div className="flex gap-2 py-1  ">
          <div className={`flex ${colorTheme} w-9 h-9  rounded-md mt-1`}>
            <div className="m-auto text-white text-1xl font-bold ">
              {number}
            </div>
          </div>
          <div className="flex">
            <div className="m-auto">
              <div className="text-base text-gray-700 font-bold">{content}</div>
              <div className="text-sm text-gray-700">{contentDetail}</div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div className="w-full       ">
        <OImgae
          url={imagePathList}
          imageClassName="imgPrint"
          relativeClass="w-full  bg-black pointer-events-none"
        ></OImgae>
      </div>
    </>
  );
};

export default Exmple;
