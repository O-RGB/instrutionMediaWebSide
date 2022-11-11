import React from "react";
import { FaFilePdf, FaPrint } from "react-icons/fa";

interface IContentHeader {
  children?: React.ReactNode;
  contect: string[];
  colorTheme?: string;
  arrRef?: any[];
  scrollToDisable: boolean;
}

const ContentHeader: React.FC<IContentHeader> = ({
  children,
  contect,
  arrRef,
  colorTheme,
  scrollToDisable,
}) => {
  colorTheme = colorTheme ?? "bg-gray-500";
  arrRef = arrRef ?? [];

  const scrollTo = (ref: any) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 75,
        behavior: "smooth",
      });
    }
  };

  const element = (detail: string, index: number) => {
    return (
      <>
        <div className="flex gap-2 py-1 ">
          <div className={`flex-none ${colorTheme} w-6 h-6  rounded-md`}>
            <div className="m-auto text-white text-center justify-center mt-0.5 text-sm font-bold ">
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
      <div
        className={`font-bold py-2 ${
          scrollToDisable == true ? "pb-4 " : ""
        } text-gray-700  text-xl`}
      >
        <ul className="list-disc pl-2 ">
          <li>เนื้อหา</li>
          {scrollToDisable == true ? (
            <div className="text-xs font-normal">
              *กดเพื่อกระโดดไปภาพเนื้อหาตัวอย่างที่ต้องการ
            </div>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="flex flex-wrap px-2 gap-1  justify-start">
        {contect.map((e, i) => {
          return (
            <React.Fragment key={`element-index-key${i}`}>
              <div
                onClick={() => {
                  if (arrRef!.length > 0 && scrollToDisable == true) {
                    scrollTo(arrRef![i]);
                  }
                }}
                id={e}
                className={` w-full md:w-5/12 ${
                  scrollToDisable == true
                    ? "cursor-pointer bg-white hover:bg-gray-200 rounded-md px-1 duration-500"
                    : ""
                } `}
              >
                {element(e, i + 1)}
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="h-5"></div>
    </>
  );
};

export default ContentHeader;
