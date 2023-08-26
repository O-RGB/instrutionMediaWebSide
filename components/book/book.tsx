import React from "react";
import OImgae from "../image/OImage";

interface BookProps {
  imagePath?: string;
}

const Book: React.FC<BookProps> = ({ imagePath }) => {
  return (
    <OImgae
      url={imagePath}
      objectType="object-contain"
      imageClassName="h-28 sm:h-40 md:h-40 lg:h-56 "
      relativeClass="z-20 object-contain rounded-md shadow-md w-20 sm:w-28 lg:w-40 h-full"
    ></OImgae>
  );
};

export default Book;
