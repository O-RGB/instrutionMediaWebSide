import React from "react";

/* eslint-disable @next/next/no-img-element */
interface IExmple {
  imagePathList: any[];
}

const Exmple: React.FC<IExmple> = ({ imagePathList }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 m-auto">
      {imagePathList.map((e,i) => {
        return (
          <React.Fragment key={`image-ex-${i}`}>
            <img src={e} alt="" className="cursor-pointer w-full sm:w-48 m-auto h-auto bg-black shadow-md rounded-lg" />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Exmple;
