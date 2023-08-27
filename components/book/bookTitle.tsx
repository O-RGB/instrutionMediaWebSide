import React from "react";
import Book from "./book";

interface BookTitleProps {
  imagePath: string;
  title: string;
  detail: string;
  onClick?: () => void;
}

const BookTitle: React.FC<BookTitleProps> = ({
  imagePath,
  title,
  detail,
  onClick,
}) => {
  return (
    <>
      <div className="flex flex-col gap-1 cursor-pointer" onClick={onClick}>
        <div className="flex justify-center items-center w-full p-2">
          <Book
            height="h-56"
            width="w-fit"
            objectType=""
            imagePath={imagePath}
          ></Book>
        </div>
        <div className="leading-none">
          <div className="text-lg font-bold min-h-[30px]">{title}</div>
          <div className="text-sm text-gray-500 line-clamp">{detail}</div>
        </div>
      </div>
    </>
  );
};

export default BookTitle;
