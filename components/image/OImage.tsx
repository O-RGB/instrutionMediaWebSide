import React, { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface OImgaeProps {
  url?: string;
  onLoad?: (e: any) => void;
  imageClassName?: string;
  imageClip?: string;
  relativeClass?: string;
  objectType?: string;
  widthLoading?: string;
  load?: boolean;
}

const OImgae: React.FC<OImgaeProps> = ({
  url,
  onLoad,
  imageClassName,
  relativeClass,
  imageClip,
  load,
  objectType,
}) => {
  const [isImageReady, setIsImageReady] = useState(false);
  const [isImageReadyHidden, setIsImageReadyHidden] = useState(false);

  const [isImageNotFound, setIsImageNotFound] = useState(false);

  const [naturalWidth, setnaturalWidth] = useState<string>("0");
  const [naturalHeight, setnaturalHeight] = useState<string>("0");

  const [urlNewState, setUrlNewState] = useState<string | undefined>(undefined);
  const [check, setCheck] = useState<number>(1000);
  const [countCheck, setCountCheck] = useState<number>(0);

  const onLoadCallBack = (e: {
    naturalWidth: number;
    naturalHeight: number;
  }) => {
    setIsImageReady(true);
    onLoad?.(e);
    setTimeout(() => {
      setIsImageReadyHidden(true);
    }, 0);
  };

  useEffect(() => {
    console.log("IMage");
  }, []);

  return (
    <div className={`relative overflow-hidden w-full h-full  ${relativeClass}`}>
      <div>
        {load && <div className="w-40"></div>}
        <div
          // hidden={isImageReadyHidden || isImageNotFound}
          className={`absolute top-0 left-0 w-full h-full z-30 ${imageClip} aspect-[4/3] ${relativeClass} ${
            isImageReady ? "opacity-0 " : " "
          } duration-1000`}
        >
          <Skeleton
            baseColor="#e3e3e3"
            className="w-full h-full opacity-100 scale-110"
          ></Skeleton>
        </div>
      </div>
      <div
        // hidden={!isImageNotFound && url != ""}
        className={`absolute top-0 left-0 w-full h-full z-30 flex justify-center items-center  ${
          !isImageNotFound || url != "" ? "opacity-0" : "opacity-100"
        } duration-1000`}
      >
        Image Not Found
      </div>
      <div className={`${imageClassName} z-10 `}>
        {url && url != "" ? (
          <Image
            loading="lazy"
            // unoptimized
            // onError={(e) => {
            //   console.log(e)
            //   // setIsImageNotFound(true)
            // }}
            loader={() => url}
            onLoad={(e) => {
              // setnaturalWidth(String(e.currentTarget.width));
              // setnaturalHeight(String(e.currentTarget.height));
            }}
            onLoadingComplete={!load ? onLoadCallBack : undefined}
            src={url}
            style={{
              width: "100%",
              height: "100%",
            }}
            width={Number(naturalWidth)}
            height={Number(naturalHeight)}
            sizes="100vw"
            className={`${
              objectType ? objectType : "object-cover"
            } opacity-0   ${isImageReady ? "opacity-100" : ""} duration-1000`}
            alt={""}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default OImgae;
