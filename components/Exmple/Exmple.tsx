import React from "react";

/* eslint-disable @next/next/no-img-element */
interface IExmple {
  imagePathList: any[];
}

const Exmple: React.FC<IExmple> = ({ imagePathList }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 m-auto  ">
      {imagePathList.map((e,i) => {
        return (
          <React.Fragment key={`image-ex-${i}`}>
            <img src={e} alt="" className="w-96 h-auto bg-black" />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Exmple;
