import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { createRef, useEffect, useState } from "react";
import CardBackground from "../../components/CardBackground";
import CategoryHeader from "../../components/Detail/CategoryHeader";
import ContentHeader from "../../components/Detail/ContentHeader";
import DetailHeader from "../../components/Detail/DetailHeader";
import Exmple from "../../components/Detail/Exmple";
import Display from "../../components/Display";
import Header from "../../components/Header";
import HeaderPreview from "../../components/HeaderPreview";
import { DetailModel } from "../../model/Detail";
import { DetailMock } from "../../mock/Detail";
import React from "react";
import NextHead from "../../components/NextHead";
import FormatHeader from "../../components/Detail/FormatHeader";
import FreeHeader from "../../components/Detail/FreeHeader";

const Detail: NextPage = ({ props, preview }: any) => {
  const DetailMockState: IDetailMock | undefined = props;
  const previewMode = preview;
  const color = "bg-gray-400";
  var arrRef: any[] = [];

  return (
    <>
      {DetailMockState != null && (
        <>
          <NextHead
            title={(DetailMockState as IDetailMock).title}
            description={(DetailMockState as IDetailMock).titleDetail}
            image={`https://instrutionmediadetail.vercel.app/${
              previewMode == "mobile"
                ? (DetailMockState as IDetailMock).imagePreview
                : previewMode == "windows"
                ? (DetailMockState as IDetailMock).imageHaderFrontWindows
                : (DetailMockState as IDetailMock).imagePreview
            }`}
            url={`https://instrutionmediadetail.vercel.app/detail/${
              (DetailMockState as IDetailMock).url
            }${previewMode == "windows" ? "?mode=windows" : ""}`}
          ></NextHead>

          <Header></Header>
          <div className="bg-gray-100">
            {/* <img src="imagetest.png" alt="" className=" w-full h-96 object-cover" /> */}
            <HeaderPreview
              imagePath={(DetailMockState as IDetailMock).imageHaderFront}
              imagePathBlack={(DetailMockState as IDetailMock).imageHaderEnd}
              title={
                DetailMockState != undefined
                  ? (DetailMockState as IDetailMock).title
                  : ""
              }
              titleDetail={
                DetailMockState != undefined
                  ? (DetailMockState as IDetailMock).titleDetail
                  : ""
              }
              color={
                DetailMockState != undefined
                  ? (DetailMockState as IDetailMock).color
                  : "bg-purple-600"
              }
            ></HeaderPreview>
            <Display>
              <CardBackground rounded="rounded-b-md" titleHerder="??????????????????????????????">
                <CategoryHeader
                  tag={
                    DetailMockState != undefined
                      ? (DetailMockState as IDetailMock).category
                      : []
                  }
                ></CategoryHeader>
                <DetailHeader
                  file={(DetailMockState as IDetailMock).file}
                  print={(DetailMockState as IDetailMock).print}
                  colorTheme={color}
                ></DetailHeader>
                <FormatHeader
                  colorTheme={color}
                  paperNumber={(DetailMockState as IDetailMock).paperNumber}
                  paperCheck={(DetailMockState as IDetailMock).paperCheck}
                  fileEdit={(DetailMockState as IDetailMock).pdfEdit}
                  craditOnPaper={(DetailMockState as IDetailMock).craditOnPaper}
                ></FormatHeader>
                {DetailMockState != undefined ? (
                  (DetailMockState as IDetailMock).freeMode == true ? (
                    <>
                      <FreeHeader
                        downLoadFile={
                          (DetailMockState as IDetailMock).downLoadFile ?? false
                        }
                        colorTheme={color}
                      ></FreeHeader>
                    </>
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}

                <ContentHeader
                  scrollToDisable={(DetailMockState as IDetailMock).scrollAuto}
                  arrRef={arrRef}
                  colorTheme={color}
                  contect={
                    DetailMockState != undefined
                      ? (DetailMockState as IDetailMock).content
                      : []
                  }
                ></ContentHeader>
                <div className="pb-2">
                  <div className="font-bold bg-gray-100 p-3 -mx-6  text-gray-500  shadow-sm">
                    ????????????????????????
                  </div>
                </div>

                <>
                  {(DetailMockState as IDetailMock).examGroup.map((e, i) => {
                    arrRef.push(createRef());
                    return (
                      <>
                        <React.Fragment key={`exam_g_${i}`}>
                          <div ref={arrRef[i]}>
                            <Exmple
                              colorTheme={color}
                              number={`${i + 1}`}
                              content={e.name}
                              contentDetail={e.pageNumber}
                              imagePathList={e.imagePath}
                            ></Exmple>
                          </div>
                        </React.Fragment>
                      </>
                    );
                  })}
                </>

                <div className="h-auto">
                  <div className=""></div>
                </div>
              </CardBackground>
            </Display>
            <div className="flex flex-wrap justify-start sm:justify-center  gap-2 sm:gap-4 text-center  w-full h-auto bg-gray-600 p-4 text-white text-xs">
              <div>???????????????????????? ?????????????????????????????? Worksheets</div>
              <div>Email :learningworksheets@gmail.com</div>
              <div>Facebook Page : ?????????????????????????????? Worksheets</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let idTemp = context.params.id;
  let preview = context.query?.mode;
  idTemp = (idTemp as string).split("?")[0];
  var data = DetailMock!.find((e) => e.url == idTemp);
  if (data == null) {
    data = undefined;
  }
  if (preview == null) {
    preview = "mobile";
  }

  return { props: { props: data, preview: preview } };
};

<div className="grid grid-cols-12 gap-3 ">
  <div className="hidden lg:col-span-2 lg:block">
    <div className=" sticky top-16 overflow-scroll">
      <CardBackground
        padding="p-0 py-0"
        rounded="rounded-b-md"
        titleHerder="??????????????????????????????"
      >
        <div className="w-full h-screen   ">
          {/* <img src="imageExTest.png" alt="" className="w-full h-auto"/> */}
        </div>
      </CardBackground>
    </div>
  </div>
  <div className="col-span-12 lg:col-span-10">
    <CardBackground rounded="rounded-b-md" titleHerder="??????????????????????????????">
      {/* <h1>{previewMode}</h1> */}
      {/* <CategoryHeader
        tag={
          DetailMockState != undefined
            ? (DetailMockState as IDetailMock).category
            : []
        }
      ></CategoryHeader> */}
      {/* <DetailHeader colorTheme={color}></DetailHeader> */}
      {/* <ContentHeader
        colorTheme={color}
        contect={
          DetailMockState != undefined
            ? (DetailMockState as IDetailMock).content
            : []
        }
      ></ContentHeader> */}
      <div className="pb-2">
        <div className="font-bold bg-gray-100 p-3 -mx-6  text-gray-500  shadow-sm">
          ????????????????????????
        </div>
      </div>

      {/* <>
        {(DetailMockState as IDetailMock).examGroup.map((e, i) => (
          <React.Fragment key={`exam_g_${i}`}>
            <Exmple
              colorTheme={color}
              number={`${i + 1}`}
              content={e.name}
              contentDetail="????????????????????????????????? 1 - 50"
              imagePathList={e.imagePath}
            ></Exmple>
          </React.Fragment>
        ))}
      </> */}

      <div className="font-bold bg-gray-200 p-3 -mx-6 rounded-xl text-gray-500  shadow-sm">
        ??????????????????????????????????????????????????????
      </div>
      <div className="h-auto">
        <div className=""></div>
      </div>
    </CardBackground>
  </div>
</div>;
