import React from "react";
import OImgae from "../image/OImage";

interface BookProps {
  imagePath?: string;
  width?: string;
  height?: string;
  objectType?: string;
  load?: boolean;
}

const Book: React.FC<BookProps> = ({
  imagePath,
  width = "w-20 sm:w-28 lg:w-40",
  height = "h-28 sm:h-40 md:h-40 lg:h-56",
  objectType = "object-contain",
  load,
}) => {
  return (
    <OImgae
      load={load}
      url={imagePath}
      objectType={objectType}
      imageClassName={height}
      relativeClass={`z-20 rounded-md shadow-md ${width} h-full`}
    ></OImgae>
  );
};

export default Book;
