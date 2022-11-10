import React from "react";
import { FaFilePdf, FaPrint } from "react-icons/fa";

interface ICategoryHeader {
  children?: React.ReactNode;
  tag: string[];
  colorTheme?: string;
}

const CategoryHeader: React.FC<ICategoryHeader> = ({
  children,
  tag,
  colorTheme,
}) => {
  colorTheme = colorTheme ?? "bg-gray-500";

  return (
    <>
      <div className="font-bold text-gray-700 text-xl">
        <ul className="list-disc pl-2 ">
          <li>หมวดหมู่</li>
        </ul>
      </div>
      <div className="p-2 py-3 text-xs text-white font-bold flex flex-wrap gap-3">
        {tag.map((e,i) => {
          return (
            <React.Fragment key={`category-i-lop-${i}`}>
              <div className="bg-blue-400 p-1 px-2 w-fit rounded-xl cursor-pointer hover:bg-blue-500 duration-200">#{e}</div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default CategoryHeader;
