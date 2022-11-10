import React from "react";
import { FaFilePdf, FaPrint } from "react-icons/fa";

interface IContentHeader {
  children?: React.ReactNode;
  contect: string[];
  colorTheme?: string;
}

const ContentHeader: React.FC<IContentHeader> = ({
  children,
  contect,
  colorTheme,
}) => {
  colorTheme = colorTheme ?? "bg-gray-500";



  const element = (detail: string, index: number) => {
    return (
      <>
        <div className="flex gap-2 py-1 ">
          <div className={`flex ${colorTheme} w-6 h-6  rounded-md`}>
            <div className="m-auto text-white text-sm font-bold ">
              {index}
            </div>
          </div>
          <div className="flex">
            <div className="m-auto">
              <div className="text-sm text-gray-700">{detail}</div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="font-bold py-2  text-gray-700  text-xl">
        <ul className="list-disc pl-2 ">
          <li>เนื้อหา</li>
        </ul>
      </div>
      <div className="flex flex-wrap px-2 gap-1  justify-start">
        {contect.map((e, i) => {
          return (
            <React.Fragment key={`element-index-key${i}`}>
              <div className=" w-full md:w-5/12  ">{element(e, i + 1)}</div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="h-5"></div>
    </>
  );
};

export default ContentHeader;
