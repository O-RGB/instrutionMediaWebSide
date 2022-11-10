import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

const Detail: NextPage = ({ props }: any) => {
  const DetailMockState: IDetailMock | undefined = props;
  const color = "bg-gray-400";

  return (
    <>
      {DetailMockState != null && (
        <>
          <NextHead
            title={(DetailMockState as IDetailMock).title}
            description={(DetailMockState as IDetailMock).titleDetail}
            image={(DetailMockState as IDetailMock).examGroup[0].imagePath[0]}
            url={`https://instrutionmediadetail.vercel.app/detail/${
              (DetailMockState as IDetailMock).url
            }`}
          ></NextHead>

          <Header></Header>
          <div className="bg-gray-100">
            {/* <img src="imagetest.png" alt="" className=" w-full h-96 object-cover" /> */}
            <HeaderPreview
              imagePath={"../imageExTest.png"}
              imagePathBlack={"../imageExTest.png"}
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
              color={"bg-purple-600"}
            ></HeaderPreview>
            <Display>
              <div className="grid grid-cols-12 gap-3 ">
                <div className="hidden lg:col-span-2 lg:block">
                  <div className=" sticky top-16 overflow-scroll">
                    <CardBackground
                      padding="p-0 py-0"
                      rounded="rounded-b-md"
                      titleHerder="ใบงานแนะนำ"
                    >
                      <div className="w-full h-screen   ">
                        {/* <img src="imageExTest.png" alt="" className="w-full h-auto"/> */}
                      </div>
                    </CardBackground>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-10">
                  <CardBackground
                    rounded="rounded-b-md"
                    titleHerder="รายละเอียด"
                  >
                    <CategoryHeader
                      tag={
                        DetailMockState != undefined
                          ? (DetailMockState as IDetailMock).category
                          : []
                      }
                    ></CategoryHeader>
                    <DetailHeader colorTheme={color}></DetailHeader>
                    <ContentHeader
                      colorTheme={color}
                      contect={
                        DetailMockState != undefined
                          ? (DetailMockState as IDetailMock).content
                          : []
                      }
                    ></ContentHeader>
                    <div className="pb-2">
                      <div className="font-bold bg-gray-100 p-3 -mx-6  text-gray-500  shadow-sm">
                        ตัวอย่าง
                      </div>
                    </div>

                    <>
                      {(DetailMockState as IDetailMock).examGroup.map(
                        (e, i) => (
                          <React.Fragment key={`exam_g_${i}`}>
                            <Exmple
                              colorTheme={color}
                              number={`${i + 1}`}
                              content={e.name}
                              contentDetail="ตั้งแต่หน้า 1 - 50"
                              imagePathList={e.imagePath}
                            ></Exmple>
                          </React.Fragment>
                        )
                      )}
                    </>

                    <div className="font-bold bg-gray-200 p-3 -mx-6 rounded-xl text-gray-500  shadow-sm">
                      ใบงานที่เกี่ยวข้อง
                    </div>
                    <div className="h-auto">
                      <div className=""></div>
                    </div>
                  </CardBackground>
                </div>
              </div>
            </Display>
            <div className="w-full h-20 bg-gray-600"></div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  let idTemp = context.params.id;
  idTemp = (idTemp as string).split("?")[0];
  var data = DetailMock!.find((e) => e.url == idTemp);
  if (data == null) {
    data = undefined;
  }

  return { props: { props: data } };
};
