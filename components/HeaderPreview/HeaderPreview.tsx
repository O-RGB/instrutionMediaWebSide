import React from "react";
import { Parallax } from "react-scroll-parallax";
import Book from "../book/book";
import Skeleton from "react-loading-skeleton";
import { AiFillFilePdf, AiTwotonePrinter } from "react-icons/ai";
import { RiBookFill } from "react-icons/ri";

/* eslint-disable @next/next/no-img-element */
interface IHeaderPreview {
  imagePath: string;
  imagePathBlack?: string;
  title: string;
  titleDetail: string;
  color: string;
  loadingMode?: boolean;
  file?: number;
  print?: number;
  book?: number;
}

const HeaderPreview: React.FC<IHeaderPreview> = ({
  imagePath,
  imagePathBlack,
  title,
  titleDetail,
  color,
  loadingMode = false,
  file,
  print,
  book,
}) => {
  return (
    <>
      <div
        style={{ backgroundColor: color ?? "#FFFFFF" }}
        className={`relative w-full overflow-hidden select-none`}
      >
        <div className="flex  justify-center items-center w-full h-96  px-3 sm:px-10 ">
          <div className="flex gap-12 flex-col lg:flex-row w-full justify-center items-center max-w-4xl">
            <div className="w-full h-full">
              <div className="flex w-full h-full gap-4 justify-center items-center relative">
                <Book imagePath={`${imagePath}`}></Book>
                {imagePathBlack && (
                  <Book imagePath={`${imagePathBlack}`}></Book>
                )}
              </div>
            </div>
            <div className="text-white">
              <div className=" text-center sm:text-left">
                <div className="text-2xl font-bold z-20">
                  {loadingMode ? (
                    <div className="w-96">
                      <Skeleton
                        baseColor={"#e3e3e3"}
                        className="w-40 h-10"
                      ></Skeleton>
                    </div>
                  ) : (
                    title
                  )}
                </div>
                <div className="text-base z-20 py-2 flex w-full ">
                  {loadingMode ? (
                    <div className="flex flex-col gap-2">
                      <div className="w-72">
                        <Skeleton
                          className="h-6"
                          baseColor={"#e3e3e3"}
                        ></Skeleton>
                      </div>
                      <div className="w-56">
                        <Skeleton
                          className="h-6"
                          baseColor={"#e3e3e3"}
                        ></Skeleton>
                      </div>
                      <div className="w-80">
                        <Skeleton
                          className="h-6"
                          baseColor={"#e3e3e3"}
                        ></Skeleton>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <div>{titleDetail}</div>
                      <div className="flex gap-2 justify-center sm:justify-start">
                        {file && (
                          <div className="text-sm py-1.5 px-1.5 w-fit rounded-md bg-red-600 border border-white  text-white flex justify-center items-center gap-0.5">
                            <AiFillFilePdf></AiFillFilePdf>
                            {file}฿
                          </div>
                        )}
                        {print && (
                          <div className="text-sm py-1.5 px-1.5 w-fit rounded-md bg-orange-600 border border-white  text-white flex justify-center items-center gap-0.5">
                            <AiTwotonePrinter></AiTwotonePrinter>
                            {print}฿
                          </div>
                        )}
                        {book && (
                          <div className="text-sm py-1.5 px-1.5 w-fit rounded-md bg-blue-600 border border-white  text-white flex justify-center items-center gap-0.5">
                            <RiBookFill></RiBookFill>
                            {book}฿
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-20 -right-10 z-0">
          <Parallax speed={-10}>
            <img
              src="../eff.svg"
              alt=""
              className="w-auto h-60 opacity-10 z-0"
            />
          </Parallax>
        </div>

        <div className="absolute w-full -top-32 -left-40 z-0">
          <Parallax speed={-10}>
            <img
              src="../eff.svg"
              alt=""
              className="w-auto h-60  opacity-10 rotate-180 z-0"
            />
          </Parallax>
        </div>
      </div>
    </>
  );
};

export default HeaderPreview;
