import React from "react";

/* eslint-disable @next/next/no-img-element */
interface IExmple {
  imagePathList: any[];
  colorTheme?: string;
  content: string;
  contentDetail: string;
  number:string
}

const Exmple: React.FC<IExmple> = ({
  imagePathList,
  colorTheme,
  content,
  contentDetail,
  number

}) => {
  colorTheme = colorTheme ?? "bg-gray-500";
  return (
    <>
      <div className=" py-1 sticky top-14  -mx-5 sm:-mx-8 h-full bg-white  border-b">
        <div className="flex gap-2 py-1 pl-0 sm:pl-11">
          <div className={`flex ${colorTheme} w-9 h-9  rounded-sm mt-1`}>
            <div className="m-auto text-white text-1xl font-bold ">{number}</div>
          </div>
          <div className="flex">
            <div className="m-auto">
              <div className="text-base text-gray-700 font-bold">{content}</div>
              <div className="text-sm text-gray-700">{contentDetail}</div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-4 m-auto py-4 -mx-4 sm:-mx-0">
        {imagePathList.map((e, i) => {
          return (
            <React.Fragment key={`image-ex-${i}`}>
              <img
                src={e}
                alt=""
                className=" w-full sm:w-auto m-auto h-auto bg-black shadow-md rounded-lg pointer-events-none"
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Exmple;
