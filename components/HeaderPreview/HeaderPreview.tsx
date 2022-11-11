import React from "react";

/* eslint-disable @next/next/no-img-element */
interface IHeaderPreview {
  imagePath: string;
  imagePathBlack: string;
  title: string;
  titleDetail: string;
  color: string;
}

const HeaderPreview: React.FC<IHeaderPreview> = ({
  imagePath,
  imagePathBlack,
  title,
  titleDetail,
  color,
}) => {
  return (
    <>
      <div className={`relative  ${color} w-full overflow-hidden`}>
        <div className="flex max-w-7xl m-auto z-20">
          <div className="flex m-auto w-full h-96 px-5 sm:px-16">
            <div className="grid gap-3 sm:gap-10  m-auto text-white lg:grid-cols-12 ">
              <div className="col-span-6 m-auto ">
                <div className="w-full flex gap-4  ">
                  <img
                    src={`../${imagePath}`}
                    alt=""
                    className="z-20 w-auto h-32 sm:h-40 md:h-40 lg:h-56 object-contain rounded-md shadow-md"
                  />
                  <img
                    src={`../${imagePathBlack}`}
                    alt=""
                    className="z-20 w-auto  h-32 sm:h-40 md:h-40 lg:h-56 object-contain rounded-md shadow-md"
                  />
                </div>
              </div>
              <div className="col-span-6 text-lg flex m-auto">
                <div className=" text-center sm:text-left">
                  <div className="text-2xl font-bold z-20">{title}</div>
                  <div className="text-base z-20 py-2">
                   {titleDetail}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-20 -right-10 z-0">
          <img src="../eff.svg" alt="" className="w-auto h-60 opacity-10 z-0" />
        </div>

        <div className="absolute w-full -top-20 -left-40 z-0">
          <img
            src="../eff.svg"
            alt=""
            className="w-auto h-60  opacity-10 rotate-180 z-0"
          />
        </div>
      </div>
    </>
  );
};

export default HeaderPreview;
