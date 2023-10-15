import React from "react";
import Book from "./book";
import Skeleton from "react-loading-skeleton";
import { AiFillFilePdf, AiTwotonePrinter } from "react-icons/ai";
import { RiBookFill } from "react-icons/ri";

interface BookTitleProps {
  imagePath?: string;
  title: string;
  detail: string;
  onClick?: () => void;
  load?: boolean;
  file?: number;
  print?: number;
  book?: number;
}

const BookTitle: React.FC<BookTitleProps> = ({
  imagePath,
  title,
  detail,
  onClick,
  load,
  file,
  print,
  book,
}) => {
  return (
    <>
      <div className="flex flex-col gap-1 cursor-pointer" onClick={onClick}>
        <div className="flex justify-center items-center w-full p-2">
          <Book
            load={load}
            height="h-56"
            width="w-fit"
            objectType=""
            imagePath={imagePath}
          ></Book>
        </div>
        <div className="leading-none">
          <div className="text-lg font-bold min-h-[30px]">
            {load ? (
              <div className="w-full">
                <Skeleton baseColor={"#e3e3e3"} className="  h-6"></Skeleton>
              </div>
            ) : (
              title
            )}
          </div>
          <div className="text-sm text-gray-500 line-clamp ">
            {load ? (
              <div className="flex flex-col m-0 leading-2">
                <div className="w-32">
                  <Skeleton
                    baseColor={"#e3e3e3"}
                    className=" w-4 h-4"
                  ></Skeleton>
                </div>
                <div className="w-56">
                  <Skeleton
                    baseColor={"#e3e3e3"}
                    className=" w-9 h-4"
                  ></Skeleton>
                </div>
                <div className="w-10">
                  <Skeleton baseColor={"#e3e3e3"} className="  h-4"></Skeleton>
                </div>
              </div>
            ) : (
              <div>
                <div className="">
                  <div className="text-right flex flex-row justify-end gap-2 py-1 ">
                    {file && (
                      <div className="text-xs py-0.5 px-1 w-fit rounded-md bg-red-600 text-white flex justify-center items-center gap-0.5">
                        <AiFillFilePdf></AiFillFilePdf>
                        {file}฿
                      </div>
                    )}
                    {print && (
                      <div className="text-xs py-0.5 px-1 w-fit rounded-md bg-orange-600 text-white flex justify-center items-center gap-0.5">
                        <AiTwotonePrinter></AiTwotonePrinter>
                        {print}฿
                      </div>
                    )}
                    {book && (
                      <div className="text-xs py-0.5 px-1 w-fit rounded-md bg-blue-600 text-white flex justify-center items-center gap-0.5">
                        <RiBookFill></RiBookFill>
                        {book}฿
                      </div>
                    )}
                  </div>
                </div>
                {detail}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTitle;
